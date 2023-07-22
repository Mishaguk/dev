export class Cell {
  constructor(gridElement, x, y, opened) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridElement.append(cell);
    this.x = x;
    this.y = y;
    this.opened = opened;
    this.cell = cell;
  }
  setMine(mine) {
    mine.setXY(this.x, this.y);
    this.mineCell = mine;
  }
  setOpened() {
    this.opened = true;
  }
  getCell(targetCell) {
    return targetCell === this.cell;
  }

  
  isEmpty() {
    return !this.mineCell && !this.opened;
  }
}
