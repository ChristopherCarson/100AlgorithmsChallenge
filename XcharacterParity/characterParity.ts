function characterParity(symbol: string): string {
   let number = parseInt(symbol)
   if (isNaN(number)) return 'Not a digit'
   if (number % 2 === 0) return 'even'
   return 'odd'
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))