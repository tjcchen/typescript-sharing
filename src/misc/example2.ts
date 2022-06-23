/**
 * Example 2
 */
export let someStringVar: string = String(9);

// export a type
export type SumArgs = {
    firstArgument: number;
    secondArgument: number;
};

export function sum({firstArgument, secondArgument}: SumArgs) {
    return firstArgument + secondArgument;
}

let result = sum({ firstArgument: 1, secondArgument: 2 });
console.log(result);