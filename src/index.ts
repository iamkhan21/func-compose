type Func<T extends any[], R> = (...a: T) => R;

export function compose<R>(
	f1: Func<any, R>,
	...functions: Func<any, any>[]
): Func<any, R> {
	const funcs = [f1, ...functions].filter((f) => typeof f === "function");

	if (funcs.length === 0) {
		throw new Error("Must have at least one function as argument");
	}

	return function (this: any, ...args: any[]) {
		let result = funcs.at(-1)?.call(this, ...args);

		for (let i = funcs.length - 2; i >= 0; i--) {
			result = funcs[i].call(this, result);
		}

		return result as R;
	};
}
