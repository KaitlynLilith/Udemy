"use strict";

// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its
  capital city is ${capitalCity}`;
}

let countryDescription1 = describeCountry("Mexico", 131.4, "Mexico City");
console.log(countryDescription1);

let countryDescription2 = describeCountry("Canada", 38, "Ottawa");
console.log(countryDescription2);

let countryDescription3 = describeCountry("England", 56, "London");
console.log(countryDescription3);

// LECTURE: Function Declarations vs. Expressions
const worldPop = 7900;

function percentageOfWorld1(population) {
  return (population / worldPop) * 100;
}

const popMexico1 = percentageOfWorld1(131.4);
const popCanada1 = percentageOfWorld1(38);
const popEngland1 = percentageOfWorld1(56);

console.log(popMexico1);
console.log(popCanada1);
console.log(popEngland1);

const percentageOfWorld2 = function (population) {
  return (population / worldPop) * 100;
};

const popMexico2 = percentageOfWorld2(131.4);
const popCanada2 = percentageOfWorld2(38);
const popEngland2 = percentageOfWorld2(56);
console.log(popMexico2);
console.log(popCanada2);
console.log(popEngland2);

// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => (population / worldPop) * 100;
const popMexico3 = percentageOfWorld3(131.4);
const popCanada3 = percentageOfWorld3(38);
const popEngland3 = percentageOfWorld3(56);
console.log(popMexico3);
console.log(popCanada3);
console.log(popEngland3);

// LECTURE: Functions Calling Other Functions
function describePopulation(country, population) {
  return `${country} has ${population} million people,
which is about ${percentageOfWorld1(population)} of the world.`;
}
let populationDescription1 = describePopulation("Mexico", 131.4);
console.log(populationDescription1);

let populationDescription2 = describePopulation("Canada", 38);
console.log(populationDescription2);

let populationDescription3 = describePopulation("England", 56);
console.log(populationDescription3);

// LECTURE: Introduction to Arrays
const populations = [329.5, 131.4, 38, 56];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
const neighbours = ["Canada", "Mexico"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop("Utopia");
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
const posCanada = neighbours.indexOf("Canada");
neighbours[posCanada] = "Provinces of Canada";

// LECTURE: Introduction to Objects
const myCountry = {
  country: "USA",
  capital: "Washington, DC",
  language: "english",
  population: 329.5,
  neighbours: ["Canada", "Mexico"],
};
// LECTURE: Dot vs. Bracket Notation
console.log(`${myCountry.country} has 6 million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

// LECTURE: Object Methods
const myCountry2 = {
  country: "USA",
  capital: "Washington, DC",
  language: "english",
  population: 329.5,
  neighbours: ["Canada", "Mexico"],
  describe: function () {
    `${this.country} has 6 million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry2.checkIsland();

// LECTURE: Iteration: The for Loop
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

// LECTURE: The while Loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
