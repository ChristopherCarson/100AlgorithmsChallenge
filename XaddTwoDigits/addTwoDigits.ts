function addTwoDigits(n: number): number {
    //@ts-ignore
    return n.toString().split('').reduce((t, n) => parseInt(t) + parseInt(n))
}

console.log(addTwoDigits(29));