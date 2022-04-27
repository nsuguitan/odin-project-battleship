const playerFactory = (name, playerType) => {
const getName = () => {
    return name;  
}
const getPlayerType = () => {
    return playerType;
}

const takeTurn = (loc) => {

}
const computerMove = () => {

}

return {getName, getPlayerType, takeTurn, computerMove}
}

module.exports = playerFactory;