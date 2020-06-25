function arrayPreviousLess(items: number[]): number[] {
    const returnArray = []
    for (let i = items.length-1; i >= 0; i--){
        for (let ii = i - 1 ; ii >= 0; ii--){
            if(items[ii] < items[i]){
                returnArray.unshift(items[ii])
                break
            } else if (ii === 0){
                returnArray.unshift(-1)
            }
        }
    }
    returnArray.unshift(-1)
    return returnArray
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));