// Chessboard Exercise

let numRows = Number(prompt("Enter rows: " ));
let numCols = Number(prompt("Enter colums: " ));

let chessboard = '';
for (let row = 1; row <= numRows; row++) {
    for (let col = 1; col <= numCols; col++) {
        if ((row + col) % 2 === 0) {
            chessboard += '#';
        }
        else {
            chessboard += ' ';
        }
    }
    chessboard += '\n';
}
console.log(chessboard);
