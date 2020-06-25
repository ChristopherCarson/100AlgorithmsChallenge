function digitDegree(n: number, count: number = 0): number {
  if (n < 10) return count
  count++
  let sum = 0
  for (let val of n.toString().split("")){
      sum += parseInt(val)
  }
  return digitDegree(sum, count)
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));