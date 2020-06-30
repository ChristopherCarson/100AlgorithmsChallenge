function confirmEnding(str: string, target: string) {
   if (str.substring(str.length-target.length).localeCompare(target) === 0) return true 
   return false
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
