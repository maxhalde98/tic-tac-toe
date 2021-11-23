const gameBoard = (() => {
    const BOARD = ['', '', '', '', '', '', '', '', ''];
    // const SQUARES = document.querySelectorAll('.square');

    // // for (i=0; i<SQUARES.length; i++) {
    // //     let index = i;
    // //     SQUARES[i].addEventListener('click', () => {
    // //         markBoard(index);
    // //     })
    // // }

    // const updateBoard = () => {
    //     for (i=0; i<BOARD.length; i++) {
    //         SQUARES[i].textContent = BOARD[i];
    //     }
    // }
    
    // // const markBoard = (index) => {

    // //     if (PLAYER_ONE.isTurn === true && CONTROLLER.state === 'ongoing') {
    // //         if (SQUARES[index].textContent === '') {
    // //             SQUARES[index].textContent = 'x';
    // //             BOARD[index] = 'x';
    // //             if (CONTROLLER.isGameOver() !== null) {
    // //                 CONTROLLER.state = 'over';
    // //                 setTimeout(function() {
    // //                     alert(`Game over! ${PLAYER_ONE.name} won the game!`);
    // //                 },10)
    // //             }
    // //             else if (CONTROLLER.isGameOver() === null && BOARD.includes('') === false) {
    // //                 CONTROLLER.state = 'over';
    // //                 setTimeout(function() {
    // //                     alert(`Game over! Tie!`);
    // //                 },10)
    // //             }
    // //             else {
    // //                 PLAYER_ONE.isTurn = false;
    // //                 PLAYER_TWO.isTurn = true;
    // //             }
    // //         }
    // //     }
    // //     else {
    // //         if (SQUARES[index].textContent === '' && CONTROLLER.state === 'ongoing') {
    // //             SQUARES[index].textContent = 'o';
    // //             BOARD[index] = 'o';
    // //             if (CONTROLLER.isGameOver() !== null) {
    // //                 CONTROLLER.state = 'over';
    // //                 setTimeout(function() {
    // //                     alert(`Game over! ${PLAYER_TWO.name} won the game!`);
    // //                 },10)
    // //             }
    // //             else if (CONTROLLER.isGameOver() === null && BOARD.includes('') === false) {
    // //                 CONTROLLER.state = 'over';
    // //                 setTimeout(function() {
    // //                     alert(`Game over! Tie!`);
    // //                 },10)
    // //             }
    // //             else {
    // //                 PLAYER_ONE.isTurn = true;
    // //                 PLAYER_TWO.isTurn = false;
    // //             }
    // //         }
    // //     }
    // // }

    return {
        BOARD,
        // updateBoard
    }
})

const displayController = (() => {
    const PLAYER_ONE = Player(undefined, true);
    const PLAYER_TWO = Player(undefined, false);
    const GAMEBOARD = gameBoard();

    const STATE = undefined;

    const SQUARES = document.querySelectorAll('.square');

    for (i=0; i<SQUARES.length; i++) {
        let index = i;
        SQUARES[i].addEventListener('click', () => {
            markBoard(index);
        })
    }

    const updateBoard = () => {
        for (i=0; i<GAMEBOARD.BOARD.length; i++) {
            SQUARES[i].textContent = GAMEBOARD.BOARD[i];
        }
    }

    const markBoard = (index) => {
        if (PLAYER_ONE.isTurn === true && STATE === 'ongoing') {
            if (SQUARES[index].textContent === '') {
                SQUARES[index].textContent = 'x';
                GAMEBOARD.BOARD[index] = 'x';
                if (isGameOver() !== null) {
                    STATE = 'over';
                    setTimeout(function() {
                        alert(`Game over! ${PLAYER_ONE.name} won the game!`);
                    },10)
                }
                else if (isGameOver() === null && GAMEBOARD.BOARD.includes('') === false) {
                    STATE = 'over';
                    setTimeout(function() {
                        alert(`Game over! Tie!`);
                    },10)
                }
                else {
                    PLAYER_ONE.isTurn = false;
                    PLAYER_TWO.isTurn = true;
                }
            }
        }
        else {
            if (SQUARES[index].textContent === '' && STATE === 'ongoing') {
                SQUARES[index].textContent = 'o';
                GAMEBOARD.BOARD[index] = 'o';
                if (isGameOver() !== null) {
                    STATE = 'over';
                    setTimeout(function() {
                        alert(`Game over! ${PLAYER_TWO.name} won the game!`);
                    },10)
                }
                else if (isGameOver() === null && GAMEBOARD.BOARD.includes('') === false) {
                    STATE = 'over';
                    setTimeout(function() {
                        alert(`Game over! Tie!`);
                    },10)
                }
                else {
                    PLAYER_ONE.isTurn = true;
                    PLAYER_TWO.isTurn = false;
                }
            }
        }
    }
    
    const isGameOver = () => {
        if (GAMEBOARD.BOARD[0] === 'x' && GAMEBOARD.BOARD[1] === 'x' && GAMEBOARD.BOARD[2] === 'x') {
            return PLAYER_ONE;
        }
        else if (GAMEBOARD.BOARD[0] === 'o' && GAMEBOARD.BOARD[1] === 'o' && GAMEBOARD.BOARD[2] === 'o') {
            return PLAYER_TWO;
        }
        else if (GAMEBOARD.BOARD[3] === 'x' && GAMEBOARD.BOARD[4] === 'x' && GAMEBOARD.BOARD[5] === 'x') {
            return PLAYER_ONE;
        }
        else if (GAMEBOARD.BOARD[3] === 'o' && GAMEBOARD.BOARD[4] === 'o' && GAMEBOARD.BOARD[5] === 'o') {
            return PLAYER_TWO;
        }
        else if (GAMEBOARD.BOARD[6] === 'x' && GAMEBOARD.BOARD[7] === 'x' && GAMEBOARD.BOARD[8] === 'x') {
            return PLAYER_ONE;
        }
        else if (GAMEBOARD.BOARD[6] === 'o' && GAMEBOARD.BOARD[7] === 'o' && GAMEBOARD.BOARD[8] === 'o') {
            return PLAYER_TWO;
        }
        else if (GAMEBOARD.BOARD[0] === 'x' && GAMEBOARD.BOARD[3] === 'x' && GAMEBOARD.BOARD[6] === 'x') {
            return PLAYER_ONE;
        }
        else if (GAMEBOARD.BOARD[0] === 'o' && GAMEBOARD.BOARD[3] === 'o' && GAMEBOARD.BOARD[6] === 'o') {
            return PLAYER_TWO;
        }
        else if (GAMEBOARD.BOARD[1] === 'x' && GAMEBOARD.BOARD[4] === 'x' && GAMEBOARD.BOARD[7] === 'x') {
            return PLAYER_ONE;
        }
        else if (GAMEBOARD.BOARD[1] === 'o' && GAMEBOARD.BOARD[4] === 'o' && GAMEBOARD.BOARD[7] === 'o') {
            return PLAYER_TWO;
        }
        else if (GAMEBOARD.BOARD[2] === 'x' && GAMEBOARD.BOARD[5] === 'x' && GAMEBOARD.BOARD[8] === 'x') {
            return PLAYER_ONE;
        }
        else if (GAMEBOARD.BOARD[2] === 'o' && GAMEBOARD.BOARD[5] === 'o' && GAMEBOARD.BOARD[8] === 'o') {
            return PLAYER_TWO;
        }
        else if (GAMEBOARD.BOARD[0] === 'x' && GAMEBOARD.BOARD[4] === 'x' && GAMEBOARD.BOARD[8] === 'x') {
            return PLAYER_ONE;
        }
        else if (GAMEBOARD.BOARD[0] === 'o' && GAMEBOARD.BOARD[4] === 'o' && GAMEBOARD.BOARD[8] === 'o') {
            return PLAYER_TWO;
        }
        else if (GAMEBOARD.BOARD[2] === 'x' && GAMEBOARD.BOARD[4] === 'x' && GAMEBOARD.BOARD[6] === 'x') {
            return PLAYER_ONE;
        }
        else if (GAMEBOARD.BOARD[2] === 'o' && GAMEBOARD.BOARD[4] === 'o' && GAMEBOARD.BOARD[6] === 'o') {
            return PLAYER_TWO;
        }
        else {
            return null;
        }
    }

    const reset = () => {
        PLAYER_ONE.isTurn = true;
        PLAYER_TWO.isTurn = false;
        GAMEBOARD.BOARD = ['', '', '', '', '', '', '', '', ''];
        updateBoard();
    }

    return {  
        PLAYER_ONE,
        PLAYER_TWO,  
        STATE,
        reset
    }
})

const Player = (name, isTurn) => {
    return {
        name,
        isTurn
    }
}

const START_BTN = document.querySelector('#start');
const CONTROLLER = displayController();

START_BTN.addEventListener('click', () => {
    const NAMES = document.querySelector('#names');
    if (START_BTN.textContent === 'START') {
        CONTROLLER.STATE = 'ongoing';
        console.log(CONTROLLER.STATE);
        CONTROLLER.PLAYER_ONE.name = NAMES.elements['player-one'].value;
        CONTROLLER.PLAYER_TWO.name = NAMES.elements['player-two'].value;
        START_BTN.textContent = 'RESET';
    }
    else {
        NAMES.elements['player-one'].value = '';
        NAMES.elements['player-two'].value = '';
        CONTROLLER.reset();
        START_BTN.textContent = 'START';
    }
})



