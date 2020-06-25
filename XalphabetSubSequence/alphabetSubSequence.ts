function alphabetSubsequence(s: string): boolean {
    const array: string[] = s.split('')
    for (let i = 0; i < array.length -1; i++){
        if (array[i].charCodeAt(0) > array[i+1].charCodeAt(0)) return false
    }
    if (array.length !== Array.from(new Set(array)).length) return false
    return true
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))

