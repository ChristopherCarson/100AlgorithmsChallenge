function alternatingSums(a: number[]): number[] {
    let team1: number = 0
    let team2: number = 0
    for (let i = 0; i < a.length; i++){
        team1 += a[i]
        i++
        team2 += a[i] ? a[i] : 0
    }
    return [team1, team2]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))