function allLongestStrings(inputArray: string[]): string[] {
    let rArray = []
    for (let s in inputArray){
        let length = inputArray[s].length
        if(rArray[length] === undefined) rArray[length] = []
        rArray[length].push(inputArray[s])

    }
    return rArray[rArray.length - 1]
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));