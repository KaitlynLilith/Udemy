'use strict';
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();

mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();