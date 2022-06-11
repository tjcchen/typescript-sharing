import { SumArgs } from "./types";

export let singleString = 'a';

function multiplyNumbers({firstArgument = 1, secondArgument = 2}: SumArgs) {
    return firstArgument * secondArgument;
}

console.log(singleString, multiplyNumbers({firstArgument: 3, secondArgument: 4}));