// Creating a Game Board (part 2)

const board = [
  [' ', ' ', ' '], // 0
  [' ', ' ', ' '], // 1
  [' ', ' ', ' ']  // 2
];


// arrow function
const printBoard = board => {
	console.log('Current Board:');
	console.log(board[0].join(' | '));
	console.log(board[1].join(' | '));
	console.log(board[2].join(' | '));
};

console.log(printBoard(board));

board[0][1] = '1';
board[2][2] = 'B';
console.log(printBoard(board));