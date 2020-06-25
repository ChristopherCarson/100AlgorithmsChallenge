function alphabeticShift(inputString: string): string {
    const array = inputString.split('')
    for (let i in array){
        const code = array[i].charCodeAt(0)
        array[i] = String.fromCharCode(code == 122 ? 97 : code+1)
    }
    return array.join("")
}

console.log(alphabeticShift('crazy'));