const ship = require('../factories/ship');

test('Basic Test, add 1 + 1',() => {
    expect(1+1).toBe(2);
});

test('Ship Factory create ship',() =>{
    const destroyer = new ship(3);
    expect(destroyer.size).toBe(3);

})