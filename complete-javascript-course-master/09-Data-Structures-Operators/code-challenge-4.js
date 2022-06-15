document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
/* Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
*/
const inputBtn = document.querySelector('button');
inputBtn.addEventListener('click', function () {
  const inputStr = document.querySelector('textarea').value;
  const strArr = inputStr.split('\n');
  let outputStr = '';
  for (const [index, key] of strArr.entries()) {
    const [first, second] = key.toLowerCase().trim().split('_');
    const newSecond = second.replace(second[0], second[0].toUpperCase());
    const newKey = first + newSecond;
    outputStr += `${newKey.padEnd(20, ' ')} ${'✅'.repeat(index)}\n`;
  }
  console.log(outputStr);
});
