const ship = require('../factories/ship');

test('Basic Test, add 1 + 1',() => {
    expect(1+1).toBe(2);
});

test('Ship Factory create ship',() =>{
    const destroyer = new ship(3,[[0,0],[0,1]],[[0,0],[0,1],[0,2]]);
    expect(destroyer.size).toBe(3);
    expect(destroyer.hits).toStrictEqual([[0,0],[0,1]]);
    expect(destroyer.position).toStrictEqual([[0,0],[0,1],[0,2]]);

})