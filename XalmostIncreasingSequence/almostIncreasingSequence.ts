function almostIncreasingSequence(sequence: number[]): boolean {
    let flag = 0
    console.log(sequence.length)
    for (let i = 1; i < sequence.length; i++){
        if (sequence[i-1] > sequence[i]){
            flag++
            if (sequence[i-1] > sequence[i+1]) return false
        } 
        if (flag > 1) return false
    }
   return true
}

console.log(almostIncreasingSequence([1, 2, 3 , 5, 6, 7, 6])) 
console.log(almostIncreasingSequence([1, 2, -3, 1, 5])) 