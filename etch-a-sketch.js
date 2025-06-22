const grid = document.querySelector("#grid");
const setGridSize = document.querySelector("#setGridSize");
let size = 16;
let cellSize = (960 - size * 2) / size
const divs = document.createElement("div")

function createGrid() {
    console.log(size, cellSize);
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.setAttribute("style", "border: 1px solid grey; width: " + cellSize + "px; height:" + cellSize + "px; margin:0px; padding: 0px;");
        cell.addEventListener("mouseover", (event) => {
            cell.style.backgroundColor = "black";
        });
        grid.appendChild(cell);
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

setGridSize.addEventListener("click", () => {
    size = parseInt(prompt("Enter a grid size between 1-100:"));
    cellSize = (960 - size * 2) / size;
    console.log(size, cellSize);
    clearGrid();
    createGrid();
});

createGrid();