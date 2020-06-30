function commonCharacterCount(s1: string, s2: string): number {
   const hash = {}
   for (let i of s1){
    if (hash[i] === undefined){
        hash[i] = 1
    } else {
        hash[i] += 1
    }
   }
   let count = 0
   for (let c of s2){
       if (hash[c] > 0){
           count++
           hash[c] -= 1
       }
   }
   return count
}

console.log(commonCharacterCount('aabcc', 'adcaa'));