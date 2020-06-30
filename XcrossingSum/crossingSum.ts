function crossingSum(matrix: number[][], a: number, b: number): number {
    let sum = 0

    for (let i of matrix[a]){
        sum += i
    }
    for (let r = 0; r < matrix.length; r++){
        if (r !== a) sum += matrix[r][b]
    }

    return sum
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));