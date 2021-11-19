const gameBoard = (() => {
    const BOARD = [['x', 'x', 'x'], ['', '', ''], ['', '', '']];
    console.log(BOARD.length);
    const SQUARES = document.querySelectorAll('.square');

    SQUARES.forEach(square => {
        square.addEventListener('click', () => {
            let squareNumber = square.id;
            markBoard(squareNumber);
        })
    })

    const displayBoard = () => {
        let squares = document.querySelectorAll('.square');
        for (i=0; i<3; i++) {
            for (j=0; j<3; j++) {
                squares[]
            }
        }
    }
    
    const markBoard = (squareNumber) => {

        if (PLAYER_ONE.isTurn === true) {

            // document.getElementById(squareNumber).textContent = 'x';
            // PLAYER_ONE.isTurn = false;
            // PLAYER_TWO.isTurn = true;
        }
        else {
            document.getElementById(squareNumber).textContent = 'o';
            PLAYER_TWO.isTurn = false;
            PLAYER_ONE.isTurn = true;
        }
        
        
    }
    return {
        BOARD,
        markBoard
    }
})

const displayController = (() => {
    const isGameOver = () => {
        for (i=0; i<GAMEBOARD.BOARD.length; i++) {
            if (GAMEBOARD.BOARD[i][0] === 'x' && GAMEBOARD.BOARD[i][1] === 'x' && GAMEBOARD.BOARD[i][2] === 'x') {
                return PLAYER_ONE;
            }
            else if (GAMEBOARD.BOARD[i][0] === 'o' && GAMEBOARD.BOARD[i][1] === 'o' && GAMEBOARD.BOARD[i][2] === 'o') {
                return PLAYER_TWO;
            }
            else {
                return null;
            }
        }

    }
    return {
        isGameOver
    }
})

const Player = (letter, isTurn) => {
    const play = () => {
    }
    return {
        play,
        isTurn
    }
}

const GAMEBOARD = gameBoard();
const PLAYER_ONE = Player('x', true);
const PLAYER_TWO = Player('o', false);
const CONTROLLER = displayController();
CONTROLLER.isGameOver();

