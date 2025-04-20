import Grid from "./Grid.js";
import Tile from "./Tile.js";

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
console.log(grid.cells);
grid.randomEmtyCell().tile = new Tile(gameBoard);
