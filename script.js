// Initialize grid.
createGrid(16);
addPenEffect();

function addPenEffect() {
  let allSquares = document.querySelectorAll(".container > div");

  allSquares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "#fb8500";
    });
    square.addEventListener("mouseleave", () => {
      square.style.backgroundColor = "#219ebc";
    });
  });
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
