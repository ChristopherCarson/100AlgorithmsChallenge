function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let largest = 0
    for (let i = 0; i < inputArray.length - 1; i++){
        const max = Math.abs(inputArray[i] - inputArray[i+1])
        if (largest < max) largest = max
    }
    return largest
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));