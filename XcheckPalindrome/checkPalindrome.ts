function checkPalindrome(inputString: string): boolean {
    for (let i = 0; i < Math.ceil(inputString.length/2); i++){
        if (inputString[i] !== inputString[inputString.length-1-i]) return false
    }
    return true
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
