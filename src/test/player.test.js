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

test('make illegal move', () => {
    let p1 = player('Player 1', 'user')
    let enemyBoard = gameboard()
    p1.takeTurn(0,1, enemyBoard)
    expect(() => {
        p1.takeTurn(0,1, enemyBoard);
      }).toThrow(Error)
    expect(() => {
        p1.takeTurn(0,1, enemyBoard);
      }).toThrow("Wrong move captain! Try again.")
})

test('computer move generator', () => {
    let p2 = player('Player 2', 'computer');
    let myBoard = gameboard()
    let coordinates = p2.computerMove()
    expect(p2.computerMove)
    expect(p2.takeTurn(coordinates[0],coordinates[1],myBoard)).toBe(true)
})