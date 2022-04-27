let gameboard = require('../factories/gameboard');
let ship = require('../factories/ship');
let player = require('../factories/player')
test('init player', () => {
    let p1 = player('Player 1', 'user')
    expect(p1).not.toBeNull()
})

test('make legit move', () => {
    let p1 = player('Player 1', 'user')
    let enemyBoard = gameboard()
    p1.takeTurn(0,1, enemyBoard)
    expect(enemyBoard.getMissedAttack()[0][1]).toEqual(true)
})