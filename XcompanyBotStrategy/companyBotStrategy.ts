function companyBotStrategy(trainingData: number[][]): number {
    let count = 0
    let sum = 0
    for (let i of trainingData){
        if (i[1] === 1){
            count++
            sum += i[0]
        }
    }
    if (count === 0) return 0
    return sum/count
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
