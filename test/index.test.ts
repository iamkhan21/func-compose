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
    expect(() => compose()).toThrow("Must be at least one function");
  });

  it("should ignore non-functions", () => {
    const func1 = vi.fn((x) => x + 1);
    const func2 = vi.fn((x) => x + 2);
    const func3 = vi.fn((x) => x + 3);

    const composed = compose(func1, func2, func3, 1, 2, 3);

    const result = composed(2);

    expect(result).toBe(8);
  });
});
