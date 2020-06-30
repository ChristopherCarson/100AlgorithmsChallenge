function convertString(s: string, t: string): boolean {
    let p = 0
    for (let char of s){
        if (char === t[p]){
            p++
        }
    }
    if (p === t.length) return true
    return false
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
