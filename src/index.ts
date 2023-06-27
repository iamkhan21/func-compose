type Func<T extends any[], R> = (...a: T) => R;

export function compose<T extends any[], R>(
  ...functions: Array<Func<any, any>>
): Func<T, R> {
  const funcs = functions.filter((f) => typeof f === "function");

  if (funcs.length === 0) {
    throw new Error("Must have at least one function as argument");
  }

  return function (this: any, ...args: T): R {
    let result = funcs.at(-1)?.call(this, ...args);

    for (let i = funcs.length - 2; i >= 0; i--) {
      result = funcs[i].call(this, result);
    }

    return result as R;
  };
}
