import { describe, expect, it, vi } from "vitest";
import { compose } from "../src";

describe("func-compose", () => {
	it("should execute subfunctions", () => {
		const func1 = vi.fn();

		const composed = compose(func1);

		composed(2);

		expect(func1).toBeCalledWith(2);
	});

	it("should execute subfunctions in reverse order", () => {
		const func1 = vi.fn((x) => x + 1);
		const func2 = vi.fn((x) => x + 2);
		const func3 = vi.fn((x) => x + 3);

		const composed = compose(func1, func2, func3);

		const result = composed(2);

		expect(result).toBe(8);

		expect(func3).toBeCalledWith(2);
		expect(func2).toBeCalledWith(5);
		expect(func1).toBeCalledWith(7);
	});

	it("should throw error if no functions are passed", () => {
		// @ts-ignore
		expect(() => compose()).toThrow(
			"Must have at least one function as argument",
		);
	});

	it("should ignore non-functions", () => {
		const func1 = vi.fn((x) => x + 1);
		const func2 = vi.fn((x) => x + 2);
		const func3 = vi.fn((x) => x + 3);

		const composed = compose(
			func1,
			func2,
			func3,
			// @ts-ignore
			"1",
			2,
			false,
			undefined,
			{},
			[],
		);

		const result = composed(2);

		expect(result).toBe(8);
	});

	it("compose handles this correctly", () => {
		const obj = {
			value: "Hello, world!",
			fn1: function () {
				return this.value;
			},
			fn2: (value: string) => value.toUpperCase(),
		};

		const composed = compose(obj.fn2, obj.fn1);

		// When called as a method on obj, composed should return obj.value.toUpperCase()
		const result = composed.call(obj);

		expect(result).toBe("HELLO, WORLD!");
	});
});
