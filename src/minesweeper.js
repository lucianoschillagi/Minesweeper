// Minesweeper (part 3)

// una función para generar el tablero que verá el jugador
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	const board = [];

	for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
		const row = [];
		for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
			row.push(' ');

		}
	board.push(row);
	}
	return board;
};

// una función para generar el tablero que contendrá las bombas (background)
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	const board = [];

	for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
		const row = [];
		for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
			row.push(null);

		}
	board.push(row);
	}

	let numberOfBombsPlaced = 0;
	while (numberOfBombsPlaced < numberOfBombs) {
		const randomRowIndex = Math.floor(Math.random() * numberOfRows);
		const randomColumnndex = Math.floor(Math.random() * numberOfColumns);

		board[randomRowIndex][randomColumnndex] = 'B';

		numberOfBombsPlaced++;
	}

	return board;
};


// arrow function
const printBoard = board => {
	console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(3,3);
const bombBoard = generateBombBoard(3,2,2);

printBoard(playerBoard);