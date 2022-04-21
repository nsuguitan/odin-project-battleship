const ship = require('../factories/ship');

const gameboardFactory = () => {
    const boardSize = 7;
    const shipArray = [];
    let board  = Array(boardSize).fill().map(() => Array(boardSize).fill(0));
    const getBoard = () => board;
    const placeShip = (size,position) => {
        shipArray.append(ship(size,row,col,isVertical));
    }
    return{getBoard};
};
module.exports = gameboardFactory;