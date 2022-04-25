const ship = require('../factories/ship');

const gameboardFactory = () => {
    const boardSize = 10;
    let board  = Array(boardSize).fill().map(() => Array(boardSize).fill(null));
    const getBoard = () => board;
    const placeShip = (myShip,row,col,isVertical) => {
        if(validPlacement(myShip.getSize(),row,col,isVertical)){
            for (i=0; i < myShip.getSize(); i++){
                if(isVertical){
                    board[row + i][col] = myShip;
                    
                }
                else{
                    board[row][col + i] = myShip;
                    
                }
                
            }
            return true;
        }
        else{
            return false;
        }
    }
        
    const validPlacement = (size,row,col,isVertical) => {
        //check out of bounds
        if((row + size >= boardSize && isVertical === true) || (col + size >= boardSize && isVertical === false)){return false;}
        //check collision
        for (i=0; i < size; i++){
            if(isVertical){
                if(board[row + i][col] !== null) {return false;}
            }
            else{ 
                if(board[row][col + i] !== null) {
                    return false;
                }
                
            };     
        }
        return true;
    }
    return{getBoard, placeShip, validPlacement};
};
module.exports = gameboardFactory;