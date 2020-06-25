function avoidObstacles(inputArray: number[]): number {
    let jumpLength = 1
    while(true){
       if (inputArray.every((i) => i%jumpLength !== 0) === true) break
       jumpLength++
    }
    return jumpLength
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));