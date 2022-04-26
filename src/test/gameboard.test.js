let gameboard = require('../factories/gameboard');
let ship = require('../factories/ship');

test('Init gameboard',() =>{
    const game = gameboard();
    expect(game.getBoard()).toStrictEqual(Array(10).fill().map(() => Array(10).fill(null)));
})

test('place horizontal ship',() =>{
    const game = gameboard();
    const destroyer =  ship(3);
    game.placeShip(destroyer,0,0,false);
    expect(destroyer).toEqual(destroyer)
    expect(game.getBoard()[0][0]).toEqual(destroyer);
    expect(game.getBoard()[0][1]).toEqual(destroyer);
    expect(game.getBoard()[0][2]).toEqual(destroyer);
    expect(game.getBoard()[2][0]).toBe(null);
})
test('place vertical ship',() =>{
    const game = gameboard();
    const destroyer =  ship(3);
    game.placeShip(destroyer,3,3,true);
    expect(destroyer).toEqual(destroyer)
    expect(game.getBoard()[3][3]).toEqual(destroyer);
    expect(game.getBoard()[4][3]).toEqual(destroyer);
    expect(game.getBoard()[5][3]).toEqual(destroyer);
    expect(game.getBoard()[3][4]).toBe(null);
})

test('valid ship location',() =>{
    const game = gameboard();
    const destroyer =  ship(3);
    ;
    expect(game.placeShip(destroyer,3,3,true)).toEqual(true)
    
})

test('invalid ship location (out of bounds)',() =>{
    const game = gameboard();

    expect(game.validPlacement(3,9,9,true)).toEqual(false)
    expect(game.validPlacement(5,5,5,false)).toEqual(false)

})

test('invalid ship location (collision)',() =>{
    const game = gameboard();
    const destroyer =  ship(3);
    game.placeShip(destroyer,3,3,true);
    expect(game.validPlacement(2,5,2,false)).toEqual(false);
    expect(game.validPlacement(2,2,3,true)).toEqual(false);
})

test(' valid receive attack (no hit, miss array)', () => {
    const game = gameboard();
    game.receiveAttack(2,3);
    expect(game.getMissedAttack()[2][3]).toEqual(true);

})
test(' valid receive attack (trigger hit on ship object)', () => {
    const game = gameboard();
    const destroyer =  ship(3);
    game.placeShip(destroyer,1,3,true);
    game.receiveAttack(2,3);
    expect(game.getMissedAttack()[2][3]).toEqual(false);
    expect(destroyer.getHits()).toEqual(expect.arrayContaining(["23"]));

})

test(' invalid receive attack (already attacked miss)', () => {
    const game = gameboard();
    game.receiveAttack(9,9);
    expect(game.receiveAttack(9,9)).toEqual(false);

})

test(' invalid receive attack (already attacked hit)', () => {
    const game = gameboard();
    const destroyer =  ship(3);
    game.placeShip(destroyer,1,3,true);
    game.receiveAttack(2,3);
    expect(destroyer.getHits()).toEqual(expect.arrayContaining(["23"]))
    expect(game.getBoard()[2][3]).toEqual(destroyer)
    expect(game.getBoard()[2][3].getHits()).toEqual(expect.arrayContaining(["23"]))
    expect(game.getBoard()[2][3].getHits().includes("23")).toEqual(true)
    expect(game.receiveAttack(2,3)).toEqual(false);

})

test('All ships sunk', () => {
    const game = gameboard();
    const s1 =  ship(1);
    const s2 =  ship(1);
    game.placeShip(s1,0,0,false);
    game.placeShip(s2,1,0,false);
    s1.hit(0,0)
    s2.hit(1,0)
    expect(game.allSunk()).toEqual(true)
})
test('All ships sunk', () => {
    const game = gameboard();
    const s1 =  ship(1);
    const s2 =  ship(1);
    game.placeShip(s1,0,0,false);
    game.placeShip(s2,1,0,false);
    s1.hit(0,0)
    s2.hit(1,0)
    expect(s1.getHits()).toEqual(expect.arrayContaining(["00"]))
    expect(s2.getHits()).toEqual(expect.arrayContaining(["10"]))
    expect(game.allSunk()).toEqual(true)
})