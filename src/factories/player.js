const playerFactory = (name, playerType) => {
const getName = () => {
    return name;  
}
const getPlayerType = () => {
    return playerType;
}

const takeTurn = (row, col, board) => {
    board.receiveAttack(row,col)
}
const computerMove = () => {

}

return {getName, getPlayerType, takeTurn, computerMove}
}

module.exports = playerFactory;