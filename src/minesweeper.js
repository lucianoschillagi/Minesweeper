// Creating a Game Board (part 2)

const exampleBoard = [
  [' ', ' ', ' '], // first row
  [' ', ' ', ' '], // second row
  [' ', ' ', ' ']  // third row
];


// arrow function
const printBoard = board => {
	console.log('Current Board:');
	console.log(board[0].join(' | ')); // join array method
	console.log(board[1].join(' | '));
	console.log(board[2].join(' | '));
};

console.log(printBoard(exampleBoard));

exampleBoard[0][1] = '1';
exampleBoard[2][2] = 'B';
console.log(printBoard(exampleBoard));