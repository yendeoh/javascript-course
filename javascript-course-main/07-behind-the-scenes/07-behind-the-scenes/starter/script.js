'use strict';

console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace();
}

outerFunction();

const globalVar = 'I am global';

function anyFunction() {
  console.log(globalVar);
}

function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(functionVar);
}

if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too!';
  var notBlockScoped = 'I leak out';
}

console.log(notBlockScoped);

const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'function-var';
  }
  console.log(outer, inner, functionVar);
}

demoScope();

const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  if (true) {
    const name = 'BlockName';
    b();
  }
}

function b() {
  console.log(name);
}

a();

console.log(varX);
var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX);
console.log(letX);
console.log(constX);

const person = {
  name: 'Jonas',
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};

person.greet();

const anotherPerson = { name: 'Sarah' };
anotherPerson.greet = person.greet;
anotherPerson.greet();

const greetFunction = person.greet;
greetFunction();

const obj = {
  name: 'Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  }
};

obj.regularMethod();
obj.arrowMethod();

const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular Method this:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow Method this:', this.name);
  }
};

quiz.regularMethod();
quiz.arrowMethod();

const timer = {
  name: 'Timer',
  start() {
    const self = this;
    setTimeout(function() {
      console.log(self.name);
    }, 100);
  },
  startModern() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
};

timer.start();
timer.startModern();

let age = 30;
let oldAge = age;
age = 31;

console.log('age:', age);
console.log('oldAge:', oldAge);

const me = { name: 'Jonas', age: 30 };
const friend = me;
friend.age = 27;

console.log('me:', me);
console.log('friend:', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);

console.log('original:', originalPerson);
console.log('updated:', updatedPerson);
console.log('same object?:', originalPerson === updatedPerson);

const original = {
  name: 'Alice',
  age: 30,
  hobbies: ['reading', 'coding']
};

const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
console.log('original name:', original.name);
console.log('copy name:', shallowCopy.name);

shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies);
console.log('copy hobbies:', shallowCopy.hobbies);

const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);

const deepOriginal = {
  name: 'Charlie',
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography']
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');

console.log('original address:', deepOriginal.address);
console.log('copy address:', deepCopy.address);
console.log('original hobbies:', deepOriginal.hobbies);
console.log('copy hobbies:', deepCopy.hobbies);

const problemObject = {
  name: 'Test',
  method() {
    return 'Hello';
  },
  date: new Date(),
  undefinedValue: undefined
};

const brokenCopy = JSON.parse(JSON.stringify(problemObject));
console.log('Broken copy:', brokenCopy);

const workingCopy = structuredClone(problemObject);
console.log('Working copy:', workingCopy);

const userManager = {
  users: [],
  addUser(user) {
    const userCopy = structuredClone(user);
    this.users.push(userCopy);
    return this;
  },
  getUsers() {
    return structuredClone(this.users);
  }
};

const originalUser = { name: 'John', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);

originalUser.name = 'Modified';
console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]);
