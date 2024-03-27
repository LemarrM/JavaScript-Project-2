const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const gamePlay = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors'];

    playerOptions.forEach(option => {
        option.addEventListener('click', function () {
            const movesLeft = document.querySelector('.movesLeft');
            moves++;
            movesLeft.innerText = `Moves Left: ${5 - moves}`;

            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];

            winner(this.innerText, computerChoice);

            if (moves === 5) {
                gameOver(playerOptions, movesLeft);
            }
        })
    })
    }

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p_Score');
        const computerScoreBoard = document.querySelector('.c_Score');
        player = player.toLowerCase();
		computer = computer.toLowerCase();
        if (player === computer) {
            result.innerText = 'You have Tied';
        } else if (player === 'rock') {
            if (computer === 'paper') {
                result.innerText = 'Computer Won';
                computerScore++;
                computerScoreBoard.innerText = computerScore;
            } else {
                result.innerText = 'Player Won'
                playerScore++;
                playerScoreBoard.innerText = playerScore;
            }
        } else if (player === 'scissors') {
            if (computer === 'rock') {
                result.innerText = 'Computer Won'
                computerScore++
                computerScoreBoard.innerText = computerScore;
            } else {
                result.innerText = 'Player Won'
                playerScore++;
                playerScoreBoard.innerText = playerScore;
            }
        } else if (player === 'paper') {
            if (computer === 'scissors') {
                result.innerText = 'Computer Won'
                computerScore++
                computerScoreBoard.innerText = computerScore;
            } else {
                result.innerText = 'Player Won'
                playerScore++;
                playerScoreBoard.innerText = playerScore;
            }
        }
        
    }

    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.choice');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        chooseMove.innerText = 'Game Over';
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.innerText = 'Well Done You Won!'
        } else if (playerScore < computerScore) {
            result.innerText = 'Too Bad You Have Lost'
        } else {
            result.innerText = 'Its a Draw'
        }
        
        reloadBtn.innerText = 'RESTART';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    gamePlay();
}
  
game();








