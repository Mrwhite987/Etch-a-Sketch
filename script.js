// Initialize grid.
createGrid(16);
addPenEffect();

function addPenEffect() {
  let allSquares = document.querySelectorAll(".container > div");

  allSquares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = genRandomColor();
    });
    square.addEventListener("mouseleave", () => {
      square.style.backgroundColor = genRandomColor();
    });
  });
}

function genRandomColor() {
  let red = getRandomInt(0, 255);
  let green = getRandomInt(0, 55);
  let blue = getRandomInt(0, 255);
  let opacity = Math.random(0, 1);
  return `rgba(${red},${green},${blue},${opacity})`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sizeButton = document.querySelector("button");
sizeButton.addEventListener("click", () => {
  let squareNum = prompt("Enter a new number of squares per side:");

  createGrid(Number(squareNum));
  addPenEffect();
});

function createGrid(squareNumPerSide) {
  let container = document.querySelector("div.container");
  if (squareNumPerSide > 100) {
    alert(" Too large! Please input a number smaller than 100.");
  } else {
    container.replaceChildren();
  }
  for (let i = 0; i < squareNumPerSide * squareNumPerSide; i++) {
    let squareDiv = document.createElement("div");
    width = 960 / squareNumPerSide;
    squareDiv.style.width = `${width}px`;
    squareDiv.style.height = `${width}px`;
    container.appendChild(squareDiv);
  }
}
