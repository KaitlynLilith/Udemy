'use strict';

// function Person(firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

// const katie = new Person('Katie', 1978);
// console.log(katie);

// const nikki = new Person('nikki', 1985);
// const thunder = new Person('thunder', 1980);
// console.log(nikki, thunder);
// console.log(katie instanceof Person);

// Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// katie.calcAge();
// nikki.calcAge();
// thunder.calcAge();

// console.log(katie.__proto__);
// console.log(katie.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(katie));

// Person.prototype.species = 'Homo Sapiens';
// console.log(katie.species);

// console.log(katie.hasOwnProperty('firstName'));
// console.log(katie.hasOwnProperty('species'));

// console.log(katie.__proto__);
// console.log(katie.__proto__.__proto__);
// console.log(katie.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this._fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods in prototype
//   get age() {
//     return 2022 - this.birthYear;
//   }
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }
//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name!`);
//     }
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   // Methods not put into the prototype
//   static hey() {
//     console.log('Hi! *waves*');
//   }
// }

// const bane = new PersonCl('bane Bunny', 1995);
// console.log(bane);
// bane.calcAge();
// console.log(bane.fullName);

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthyear);
//   },
//   init(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   },
// };

// const kendall = Object.create(PersonProto);

// kendall.fullName = 'Kendall Fox';
// kendall.birthYear = 2012;
// kendall.calcAge();
// console.log(kendall.__proto__ === PersonProto.prototype);

////////////////////////////////////
// Inheritance between Classes

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName}, and I study ${this.course}`);
// };

// const maddy = new Student('Maddy', 2012, 'Film History');
// maddy.introduce();
// maddy.calcAge();

// class Student extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName}, and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${2022 - this.birthYear} years old, but I feel more like ${
//         2022 - this.birthYear + 10
//       }!`
//     );
//   }
// }

// const martha = new Student('Martha Jones', 1985, 'Nothing');
// martha.introduce();
// martha.calcAge();
// console.log(martha.fullName);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (fullName, birthYear, course) {
//   PersonProto.init.call(this, fullName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.fullName}, and I study ${this.course}`);
// };
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'History');
// jay.introduce();
// jay.calcAge();

// class Account {
//   // Public fields
//   locale = navigator.language;
//   //Private fields
//   #pin;
//   #movements = [];
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // Public Methods
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log('Loan approved!');
//       return this;
//     }
//   }
//   #approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.requestLoan(50);
