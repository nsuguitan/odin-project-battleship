const _ = require("lodash"); 
const playerFactory = (name, playerType) => {
    
    let computerGuesses = _.shuffle(Array.from(Array(100).keys()));

    const getName = () => {
        return name;  
    }
    const getPlayerType = () => {
        return playerType;
    }
  
    const takeTurn = (row, col, board) => {
        if(board.receiveAttack(row,col)){
            return true;
        }
        else{
            throw new Error('Wrong move captain! Try again.');
        }
    }
    const computerMove = () => {
        if(!computerGuesses.length){
            throw new Error('No more moves');
        }
        else{
            let nextMove = computerGuesses.shift();
            row = Math.floor((nextMove/10)%10)
            col = nextMove % 10
            return [row,col];
        }
        

}

return {getName, getPlayerType, takeTurn, computerMove}
}

module.exports = playerFactory;