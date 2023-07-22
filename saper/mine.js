export class Mine {
  constructor(gridElement) {
    this.mineElement = document.createElement('div');
    gridElement.append(this.mineElement);
  }
  setXY(x, y) {
    this.x = x;
    this.y = y;
    this.mineElement.style.setProperty('--x', x);
    this.mineElement.style.setProperty('--y', y);
  }
}
