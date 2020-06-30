function chessBoardCellColor(cell1: string, cell2: string): boolean {
    if (cellColor(cell1) === cellColor(cell2)) return true
    return false
}

const cellColor = (cell:string) => {
    let alphaEven = (cell.charCodeAt(0)-64) % 2 === 0 ? true : false
    let numericEven = (parseInt(cell[1])) % 2 === 0 ? true : false
    if (alphaEven && numericEven) return 'black'
    if (alphaEven && !numericEven) return 'white'
    if (!alphaEven && !numericEven) return 'black'
    if (!alphaEven && numericEven) return 'white'
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));

