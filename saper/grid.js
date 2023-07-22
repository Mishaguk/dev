import { Cell } from './cell.js';
const GRID_SIZE = 10;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;
export class Grid {
  constructor(gridElement) {
    this.cells = [];
    this.opened = null;

    for (let i = 0; i < CELLS_COUNT; i++) {
      this.cells.push(
        new Cell(
          gridElement,
          i % GRID_SIZE,
          Math.floor(i / GRID_SIZE),
          this.opened
        )
      );
    }
  }

  startGame(targetCell) {
    targetCell.classList.add('emptyCell');
    const cell = this.cells.find((cell) => cell.getCell(targetCell));
    cell.setOpened();
  }
  getRandomMinedCells() {
    const minedCells = [];
    const emptyCells = this.cells.filter((cell) => cell.isEmpty());
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      minedCells.push(emptyCells[randomIndex]);
    }

    return minedCells;
  }
  checkCell(targetCell) {
    const cell = this.cells.find((cell) => cell.getCell(targetCell));
    if (cell && !cell.hasOwnProperty('mineCell')) {
      cell.setOpened();

      targetCell.classList.add('emptyCell');
    }
    if (cell && cell.hasOwnProperty('mineCell')) {
      targetCell.classList.add('mineCell');
      setTimeout(() => {
        alert('you get lose , but you can try again');
      });
      location.reload(); // ?remake &&&&
    }

    return targetCell;
  }
  minesNearCheck(targetCell) {
    const cell = this.cells.find((cell) => cell.getCell(targetCell));
    const cells = this.cells;
    let x = cell.x;
    let y = cell.y;
    function getTopCell(x, y) {
      const nearCells = [];
      nearCells.push(cells.find((cell) => ((cell.y = y + 1), (cell.x = x))));
      nearCells.push(cells.find((cell) => ((cell.y = y - 1), (cell.x = x))));
      nearCells.push(
        cells.find((cell) => ((cell.y = y - 1), (cell.x = x + 1)))
      );
      nearCells.push(
        cells.find((cell) => ((cell.y = y - 1), (cell.x = x - 1)))
      );
      nearCells.push(cells.find((cell) => ((cell.y = y), (cell.x = x + 1))));
      nearCells.push(cells.find((cell) => ((cell.y = y), (cell.x = x - 1))));
      console.log(nearCells);
    }
    console.log(cell);
    getTopCell(x, y);
    console.log('check!');
  }
}
