function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let largest = 0
    for (let i = 0; i < inputArray.length - 3; i++) {
        let sum = 0
        for (let ii = 0; ii < k; ii++){
            sum += inputArray[i+ii]
        }
        if (largest < sum) largest = sum
    }
    return largest
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));