const gameBoard = (() => {
    const game = ['x', 'x', 'o', 'x', 'o', 'o', , 'x' , 'x'];
    const displayBoard = () => {
        let squares = document.querySelectorAll('.square');
        for (i=0; i<squares.length; i++) {
            squares[i].textContent = game[i];
        }
    }
    const markBoard = () => {
        let letter = arguments[0];
        let squareNumber = arguments[1];
        let squares = document.querySelectorAll('.square');
        squares[squareNumber].textContent = letter;
    }
    return {
        displayBoard,
        markBoard
    }
})

const displayController = (() => {
    const play = () => {
        alert('hello');
    }
    return {
        play
    }
})

const Player = (letter, board) => {
    const play = () => {
        board.play();
    }
    return {
        play
    }
}

const BOARD = gameBoard();
const CONTROLLER = displayController();
BOARD.displayBoard();
const PLAYER_ONE = Player('x', CONTROLLER);
PLAYER_ONE.play();

