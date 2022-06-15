/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" */

let marksMass = 78;
let marksHeight = 1.69;
let johnsMass = 92;
let johnsHeight = 1.95;

let marksBMI = marksMass / marksHeight ** 2;
let johnsBMI = johnsMass / johnsHeight ** 2;

let markHigherBMI = marksBMI > johnsBMI;

if (markHigherBMI) {
  console.log(`Mark's
    BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
  console.log(`John's
    BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
}

marksMass = 95;
marksHeight = 1.88;
johnsMass = 85;
johnsHeight = 1.76;

marksBMI = marksMass / marksHeight ** 2;
johnsBMI = johnsMass / johnsHeight ** 2;

markHigherBMI = marksBMI > johnsBMI;

if (markHigherBMI) {
  console.log(`Mark's
  BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
  console.log(`John's
  BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
}
