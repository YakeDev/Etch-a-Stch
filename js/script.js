// console.log("Bonjour Kay");

let button = document.querySelector("#button");
let canva = document.querySelector(".container");
let canvaSize = 400;
let squareQuatity = 16;

let square;

canva.style.height = `${canvaSize}px`;
canva.style.width = `${canvaSize}px`;

function squareCreation(squareQuatity) {
  let squareSize = canvaSize / squareQuatity;
  let squareNumber = Math.pow(squareQuatity, 2);

  for (let i = 0; i < squareNumber; i++) {
    square = document.createElement("div");
    square.className = "square";
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;
    canva.appendChild(square);
  }

  console.log(`Qty: ${squareQuatity}`);
  console.log(`sqSize: ${squareSize}`);
  console.log(`sqNumber: ${squareNumber}`);
}
squareCreation(squareQuatity);
blackSquare();

button.addEventListener("click", userSquare);

function userSquare() {
  canva.replaceChildren();

  squareQuatity = prompt("Enter a number below 100");
  squareCreation(squareQuatity);
  blackSquare();
}

function blackSquare() {
  let squareOver = document.querySelectorAll("div.square");

  for (let i = 0; i < squareOver.length; i++) {
    for (let j = 0; j < 10; j++) {
      squareOver[i].addEventListener("mouseover", function () {
        // squareOver[i].className = "square-black";

        squareOver[i].style.backgroundColor = `#303030`;

        squareOver[i].style.border = "1px solid rgb(223, 227, 236)";
        squareOver[i].style.opacity = j * 0.1;
      });
    }
  }
}
