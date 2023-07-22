import { Grid } from './grid.js';
import { Tile } from './tile.js';
const gameboard = document.getElementById('game-board');

const grid = new Grid(gameboard);
grid.getRandomEmptyCell().linkTile(new Tile(gameboard));
grid.getRandomEmptyCell().linkTile(new Tile(gameboard));
setupInputOnce();

function setupInputOnce(params) {
  window.addEventListener('keydown', handleInput, { once: true });
}
async function handleInput(event) {
  switch (event.key) {
    case 'ArrowUp':
      if (!canMoveUp()) {
        setupInputOnce();
        return;
      }
      await moveUp();
      break;
    case 'ArrowDown':
      if (!canMoveDown()) {
        setupInputOnce();
        return;
      }
      await moveDown();
      break;

    case 'ArrowLeft':
      if (!canMoveLeft()) {
        setupInputOnce();
        return;
      }
      await moveLeft();
      break;
    case 'ArrowRight':
      if (!canMoveRight()) {
        setupInputOnce();
        return;
      }
      await moveRight();
      break;
    default:
      setupInputOnce();
      return;
  }
  const newTile = new Tile(gameboard);
  grid.getRandomEmptyCell().linkTile(newTile);

  if (!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()) {
    await newTile.waitForAnimationEnd();
    alert('Not bad, but you can try again <3');
    return;
  }
  setupInputOnce();
}
async function moveUp() {
  await slideTiles(grid.cellsGroupedByColumn);
}
async function moveDown() {
  await slideTiles(grid.cellsGroupedByReversedColumn);
}
async function moveLeft() {
  await slideTiles(grid.cellsGroupedByRow);
}
async function moveRight() {
  await slideTiles(grid.cellsGroupedByReversedRow);
}

async function slideTiles(groupedCells) {
  const promises = [];

  groupedCells.forEach((group) => slideTilesInGroup(group, promises));

  await Promise.all(promises);

  grid.cells.forEach((cell) => {
    cell.hasTileForMerge() && cell.mergeTiles();
  });
}

function slideTilesInGroup(group, promises) {
  for (let i = 0; i < group.length; i++) {
    if (group[i].isEmpty()) {
      continue;
    }

    const cellWithTile = group[i];

    let targerCell;
    let j = i - 1;

    while (j >= 0 && group[j].canAccept(cellWithTile.linkedTile)) {
      targerCell = group[j];
      j--;
    }

    if (!targerCell) {
      continue;
    }

    promises.push(cellWithTile.linkedTile.waitForTransitionEnd());

    if (targerCell.isEmpty()) {
      targerCell.linkTile(cellWithTile.linkedTile);
    } else {
      targerCell.linkTileForMerge(cellWithTile.linkedTile);
    }
    cellWithTile.unlinkTile();
  }
}
function canMoveUp() {
  return canMove(grid.cellsGroupedByColumn);
}
function canMoveDown() {
  return canMove(grid.cellsGroupedByReversedColumn);
}
function canMoveLeft() {
  return canMove(grid.cellsGroupedByRow);
}
function canMoveRight() {
  return canMove(grid.cellsGroupedByReversedRow);
}
function canMove(groupCells) {
  return groupCells.some((group) => canMoveInGroup(group));
}
function canMoveInGroup(group) {
  return group.some((cell, index) => {
    if (index === 0) {
      return false;
    }
    if (cell.isEmpty()) {
      return false;
    }

    const targetCell = group[index - 1];
    return targetCell.canAccept(cell.linkedTile);
  });
}
