const gameboard = require('../factories/gameboard');

test('Init gameboard',() =>{
    const game = gameboard();
    expect(game.getBoard()).toStrictEqual(Array(7).fill().map(() => Array(7).fill(0)));
})

test('place ship',() =>{
    const game = gameboard();
    game.placeShip(3,0,0,false);
    expect(game.getBoard()[0][2]).toBe(1);
    expect(game.getBoard()[2][0]).toBe(0);
})