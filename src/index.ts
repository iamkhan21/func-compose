type Func<T extends any[], R> = (...a: T) => R;

export function compose<T extends any[], R>(
  ...functions: Array<Func<any, any>>
): Func<T, R> {
  const funcs = functions.filter((f) => typeof f === "function");

  if (funcs.length === 0) {
    throw new Error("Must be at least one function");
  }

  return function (...args: T): R {
    let result = funcs.at(-1)?.(...args);
    for (let i = funcs.length - 2; i >= 0; i--) {
      result = funcs[i](result);
    }
    return result as R;
  };
}
