const calculator = require('./calculator')

test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('subtracts two numbers', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
})

test('multiplies two numbers', () => {
    expect(calculator.multiply(7, 3)).toBe(21);
})

test('divides two numbers', () => {
    expect(calculator.divide(28, 4)).toBe(7);
})