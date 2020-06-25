function arrayChange(inputArray: number[]): number {
    let count = 0
    for (let i in inputArray){
        while (inputArray[i] <= inputArray[i+1])
        inputArray[i] += 1
        count++
    }
    return count
}

console.log(arrayChange([1, 1, 1]));