// calculator.test.js
const calculator = require('../zadania/zadanie1/calculator');

describe('Calculator Functions', () => {
	test('add() should correctly add two numbers', () => {
		expect(calculator.add(5, 3)).toBe(8);
		expect(calculator.add(-5, -3)).toBe(-8);
		expect(calculator.add(0, 0)).toBe(0);
	});

	test('subtract() should correctly subtract two numbers', () => {
		expect(calculator.subtract(5, 3)).toBe(2);
		expect(calculator.subtract(3, 5)).toBe(-2);
		expect(calculator.subtract(0, 0)).toBe(0);
	});

	test('multiply() should correctly multiply two numbers', () => {
		expect(calculator.multiply(5, 3)).toBe(15);
		expect(calculator.multiply(-5, -3)).toBe(15);
		expect(calculator.multiply(5, -3)).toBe(-15);
		expect(calculator.multiply(5, 0)).toBe(0);
	});

	test('divide() should correctly divide two numbers', () => {
		expect(calculator.divide(6, 3)).toBe(2);
		expect(calculator.divide(-6, -3)).toBe(2);
		expect(calculator.divide(6, -3)).toBe(-2);
	});

	test('divide() should throw an error when dividing by zero', () => {
		expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
	});
});
