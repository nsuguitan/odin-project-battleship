const ship = require('../factories/ship');

const gameboardFactory = () => {
    const boardSize = 7;
    let shipArray = [];
    let board  = Array(boardSize).fill().map(() => Array(boardSize).fill(null));
    const getBoard = () => board;
    const placeShip = (myShip,row,col,isVertical) => {
        for (i=0; i < myShip.getSize(); i++){
            if(isVertical){
                board[row + i][col] = myShip;
            }
            else{
                board[row][col + i] = myShip;
            }
            
        }
    }
    return{getBoard, placeShip};
};
module.exports = gameboardFactory;