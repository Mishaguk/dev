import { Grid } from './grid.js';
import { Cell } from './cell.js';
import { Mine } from './mine.js';
const gameField = document.getElementById('field');
const grid = new Grid(gameField);

function start() {
  gameField.addEventListener('click', handleStartGame, { once: true });
}
function handleStartGame(e) {
  const targetCell = e.target;
  grid.startGame(targetCell);

  const minedCells = grid.getRandomMinedCells();
  minedCells.forEach((element) => {
    element.setMine(new Mine(gameField));
  });
}
function clickCell() {
  gameField.addEventListener('click', handleClickCell);
}
function handleClickCell(e) {
  const clickedCell = e.target;

  grid.checkCell(clickedCell);
  grid.minesNearCheck(clickedCell);
}

start();
clickCell();
