function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));

function average(a, b, c) {
  const avg = (a + b + c) / 3;
  return avg;
}

console.log(average(2, 3, 4));

function typing() {
  document.body.append(document.createElement("p"));
  document.querySelector("p").textContent = "I'm typing this.";
}
// typing();

document.body.append(document.createElement("button"));
const btn = document.querySelector("button");

btn.addEventListener("click", typing);

const boxes = document.querySelectorAll(".color");
console.log(boxes);

for (const box of boxes) {
  box.addEventListener("click", function () {
    box.classList.toggle("purple");
  });
}
