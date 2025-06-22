const grid = document.querySelector("#grid");
const setGridSize = document.querySelector("#setGridSize");
let size = 16;
let cellSize = (960 - size * 2) / size

const colourToggle = document.querySelector("#colourToggle");
const clearGridButton = document.querySelector("#clearGridButton");
let blackFill = true;


function createGrid() {
    console.log(blackFill)
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.setAttribute("style", "border: 1px solid grey; width: " + cellSize + "px; height:" + cellSize + "px; margin:0px; padding: 0px;");
        cell.addEventListener("mouseover", (event) => {
            if (blackFill) {
                cell.style.backgroundColor = "black";
            }
            else{
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                cell.style.backgroundColor = "#" + randomColor;
            }
        });
        grid.appendChild(cell);
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

clearGridButton.addEventListener("click", () => {
    clearGrid();
    createGrid();
});

setGridSize.addEventListener("click", () => {
    size = parseInt(prompt("Enter a grid size between 1-100:"));
    cellSize = (960 - size * 2) / size;
    clearGrid();
    createGrid();
});

colourToggle.addEventListener("click", () => {
    colourToggle.textContent = blackFill ? "Rainbow Fill" : "Black Fill";
    blackFill = !blackFill;
    clearGrid();
    createGrid();
});

createGrid();