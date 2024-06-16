// console.log("Bonjour Kay");

let button = document.querySelector("#button");
let canva = document.querySelector(".container");
let canvaSize = 400;
let squareQuatity = 25;
let squareSize = canvaSize / squareQuatity;
let squareNumber = Math.pow(squareQuatity, 2);
let square;

console.log(`Qty: ${squareQuatity}`);
console.log(`sqSize: ${squareSize}`);
console.log(`sqNumber: ${squareNumber}`);

canva.style.height = `${canvaSize}px`;
canva.style.width = `${canvaSize}px`;

for (let i = 0; i < squareNumber; i++) {
  square = document.createElement("div");
  square.className = "square";
  square.style.height = `${squareSize}px`;
  square.style.width = `${squareSize}px`;
  canva.appendChild(square);
}

// square.addEventListener("mousover", function () {
//   square.classList.remove("square");
//   square.classList.add("square-black");
//   console.log("mouse out");
// });
