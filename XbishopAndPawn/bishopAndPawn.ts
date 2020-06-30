function bishopAndPawn(bishop: string, pawn: string): boolean {
    if (Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) === 
        Math.abs(parseInt(bishop.substring(1, 2)) - parseInt(pawn.substring(1, 2)))){
            return true
        }
    return false

}

console.log(bishopAndPawn('a1', 'c3'));