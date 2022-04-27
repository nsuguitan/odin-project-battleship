let gameboard = require('../factories/gameboard');
let ship = require('../factories/ship');
let player = require('../factories/player')
test('init player', () => {
    let p1 = player('Player 1', 'user')
    expect(p1).not.toBeNull()
})