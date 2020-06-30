function chunkyMonkey(arr: any[], size: number): any[][] {
    const array = []
    for (let i = 0; i < Math.ceil(arr.length/size); i++){
        array[i] = arr.slice(i*size, i*size+size)
    }
    return array
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
