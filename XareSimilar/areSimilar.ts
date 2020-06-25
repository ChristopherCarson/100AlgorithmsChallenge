function areSimilar(a: number[], b: number[]): boolean {
   const aDiff = []
   const bDiff = []
   for (let i in a){
       if (a[i] !== b[i]){
        aDiff.push(a[i])
        bDiff.push(b[i])
        if (aDiff.length > 2) return false
       }
   }
   if (aDiff[1] === bDiff[0] && aDiff[0] === bDiff[1]) return true
   return false
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
