const playerFactory = (name, playerType) => {
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

}

return {getName, getPlayerType, takeTurn, computerMove}
}

module.exports = playerFactory;