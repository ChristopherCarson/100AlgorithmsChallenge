function electionsWinners(votes: number[], k: number): number {
    let count = 0

    for (let val of votes){
        if (val + k > Math.max(...votes)) count++
    }

    return count
}

console.log(electionsWinners([2, 3, 5, 2], 3));