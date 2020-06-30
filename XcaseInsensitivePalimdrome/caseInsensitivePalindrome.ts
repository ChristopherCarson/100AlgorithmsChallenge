function isCaseInsensitivePalindrome(inputString: string): boolean {
    const upper = inputString.toUpperCase()
    for (let i = 0; i < Math.ceil(upper.length/2); i++){
        if (upper.charCodeAt(i) !== upper.charCodeAt(upper.length - i - 1)) return false
    }
    return true
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));