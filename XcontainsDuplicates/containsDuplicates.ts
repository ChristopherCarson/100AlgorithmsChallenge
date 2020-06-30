function containsDuplicates(a: number[]): boolean {
    const hash = {}
    for (let i of a){
        if (hash[i] === undefined){
            hash[i] = 1
        } else {
            return true
        }
    }
    return false
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
