let container = document.querySelector("div.container");
for (let i = 0; i < 16 * 16; i++) {
  let squareDiv = document.createElement("div");
  container.appendChild(squareDiv);
}

let allSquares = document.querySelectorAll(".container > div");

allSquares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "#fb8500";
  });
  square.addEventListener("mouseleave", () => {
    square.style.backgroundColor = "#219ebc";
  });
});

let sizeButton = document.querySelector("button");
sizeButton.addEventListener("click", () => {
  let squareNum = prompt("Enter a new number of squares per side:");
  if (Number(squareNum) > 100) {
    alert(" Too large! Please input a number smaller than 100.");
  } else {
    allSquares.forEach((square) => {
      container.removeChild(square);
    });
    let newWidth = 960 / squareNum;
    for (let i = 0; i < squareNum * squareNum; i++) {
      let squareDiv = document.createElement("div");
      squareDiv.style.width = `${newWidth}px`;
      squareDiv.style.height = `${newWidth}px`;
      container.appendChild(squareDiv);
    }
    allSquares = document.querySelectorAll(".container > div");
    allSquares.forEach((square) => {
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "#fb8500";
      });
      square.addEventListener("mouseleave", () => {
        square.style.backgroundColor = "#219ebc";
      });
    });
  }
});
