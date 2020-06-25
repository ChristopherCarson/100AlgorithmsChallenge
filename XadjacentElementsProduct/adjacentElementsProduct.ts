function adjacentElementsProduct(inputArray: number[]): number {
    var prod = inputArray[0] * inputArray[1]
    for (let i = 1; i < inputArray.length - 1; i++){
        if (inputArray[i] * inputArray[i+1] > prod) prod = inputArray[i] * inputArray[i+1]
    }
    return prod
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));