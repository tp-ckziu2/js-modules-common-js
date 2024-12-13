// textUtils.test.js
const textUtils = require('../zadania/zadanie3/textUtils');

describe('Text Utilities', () => {
	test('capitalize() should capitalize the first letter of the string', () => {
		expect(textUtils.capitalize('hello')).toBe('Hello');
		expect(textUtils.capitalize('world')).toBe('World');
		expect(textUtils.capitalize('javaScript')).toBe('JavaScript');
		expect(textUtils.capitalize('')).toBe(''); // Edge case: empty string
	});

	test('toUpperCase() should convert all characters to uppercase', () => {
		expect(textUtils.toUpperCase('hello')).toBe('HELLO');
		expect(textUtils.toUpperCase('JavaScript')).toBe('JAVASCRIPT');
		expect(textUtils.toUpperCase('')).toBe(''); // Edge case: empty string
	});

	test('toLowerCase() should convert all characters to lowercase', () => {
		expect(textUtils.toLowerCase('HELLO')).toBe('hello');
		expect(textUtils.toLowerCase('JavaScript')).toBe('javascript');
		expect(textUtils.toLowerCase('')).toBe(''); // Edge case: empty string
	});
});
