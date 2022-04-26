const ship = require('../factories/ship');

test('Basic Test, add 1 + 1',() => {
    expect(1+1).toBe(2);
})

test('Ship Factory create ship',() =>{
    const destroyer =  ship(3);
    expect(destroyer.getSize()).toBe(3);
    expect(destroyer.getHits()).toStrictEqual([]);
})

test('Ship hit',() =>{
    const destroyer = ship(3);
    expect(destroyer.getHits()).toEqual([])
    destroyer.hit(0,0);
    destroyer.hit(0,1);
    expect(destroyer.getHits()).toEqual(expect.arrayContaining(["00", "01"]));
})

test('Ship sunk',() =>{
    const destroyer = ship(3);
    destroyer.hit(0,0);
    destroyer.hit(0,1);
    destroyer.hit(0,2);
    expect(destroyer.isSunk()).toStrictEqual(true);
})

test('Ship not sunk',() =>{
    const destroyer = ship(3);
    expect(destroyer.isSunk()).toStrictEqual(false);
})