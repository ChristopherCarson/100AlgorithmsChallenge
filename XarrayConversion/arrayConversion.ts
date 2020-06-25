

function arrayConversion(inputArray: number[]): number {
    let summerize = true

    while (inputArray.length !== 1 ){
        inputArray = sum(inputArray, summerize)
        summerize = !summerize
    }
    return inputArray[0]
}

const sum = (array, add) => {
    const returnArray = []
    for (let i = 0; i < array.length - 1; i += 2){
        if (add){
            returnArray.push(array[i] + array[i+1])
        }else{
            returnArray.push(array[i] * array[i+1])
        }
    }   
    return returnArray
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));



