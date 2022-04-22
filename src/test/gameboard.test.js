const gameboard = require('../factories/gameboard');
const ship = require('../factories/ship');

test('Init gameboard',() =>{
    const game = gameboard();
    expect(game.getBoard()).toStrictEqual(Array(7).fill().map(() => Array(7).fill(null)));
})

test('place ship',() =>{
    const game = gameboard();
    const destroyer =  ship(3,[[0,0],[0,1],[0,2]]);
    game.placeShip(destroyer,0,0,false);
    expect(destroyer).toEqual(destroyer)
    expect(game.getBoard()[0][0]).toEqual(destroyer);
    expect(game.getBoard()[0][1]).toEqual(destroyer);
    expect(game.getBoard()[0][2]).toEqual(destroyer);
    expect(game.getBoard()[2][0]).toBe(null);
})