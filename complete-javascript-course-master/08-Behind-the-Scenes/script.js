'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    let output = `${firstName} is ${age} years old and born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Angela';
      const str = `Oh, and ${firstName} is a millenial`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'New Output!';
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = 'Katie';
calcAge(1978);
// console.log(age);
// printAge();

console.log(me);
// console.log(job);
// console.log(year);
var me = 'Angela';
let job = 'teacher';
const year = 1978;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function () {
  return a + b;
};

var addArrow = (a, b) => a + b;
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
