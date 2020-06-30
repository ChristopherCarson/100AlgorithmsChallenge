function boxBlur(image: number[][]): number[][] {
    const array = []
    for (let y = 0; y < image.length; y += 3){
        const row = []
        let count = 0
        for (let x = 0; x < image[0].length; x += 3){
            let sum = 0
            for (let i = y; i < y+3; i++){
                for (let ii = x; ii < x+3; ii++){
                    sum += image[i][ii]
                    count++
                }
            }
            row.push(Math.floor(sum/count))
        }
        array.push(row)
    }
    return array
}

console.log(boxBlur([[1, 1, 1, 1, 1, 1, 1, 1, 1], 
                     [1, 1, 1, 1, 7, 1, 1, 7, 1], 
                     [1, 1, 1, 1, 1, 1, 1, 1, 1],
                     [2, 2, 2, 1, 1, 1, 1, 1, 1],
                     [2, 2, 2, 1, 1, 1, 1, 1, 1],
                     [2, 2, 2, 1, 1, 1, 1, 1, 1],
                     [5, 5, 5, 1, 1, 1, 9, 9, 9],
                     [5, 5, 5, 1, 1, 1, 9, 9, 9],
                     [5, 5, 5, 1, 1, 1, 9, 9, 9]]));