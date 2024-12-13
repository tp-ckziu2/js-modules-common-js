const counter = require('../zadania/zadanie2/counter');

describe('Counter Module', () => {
	beforeEach(() => {
		counter.resetCount(); // Resetuje licznik przed każdym testem
	});

	test('increment() should increase count by 1', () => {
		counter.increment();
		expect(counter.getCount()).toBe(1);

		counter.increment();
		expect(counter.getCount()).toBe(2);
	});

	test('decrement() should decrease count by 1', () => {
		counter.increment();
		counter.increment(); // Count powinien wynosić 2
		counter.decrement();
		expect(counter.getCount()).toBe(1);

		counter.decrement();
		expect(counter.getCount()).toBe(0);
	});

	test('getCount() should return the current count value', () => {
		expect(counter.getCount()).toBe(0);

		counter.increment();
		expect(counter.getCount()).toBe(1);
	});

	test('Count should remain consistent across multiple operations', () => {
		counter.increment();
		counter.increment();
		counter.decrement();
		expect(counter.getCount()).toBe(1);
	});
});
