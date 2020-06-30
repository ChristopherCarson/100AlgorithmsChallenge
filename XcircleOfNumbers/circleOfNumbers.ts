function circleOfNumbers(n: number, firstNumber: number): number {
    return firstNumber > n/2 ? n/2 - firstNumber : n/2 + firstNumber
}

console.log(circleOfNumbers(10, 2));