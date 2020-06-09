const game = () => {
    let pScore = 0, cScore = 0;
    let introScreen = document.querySelector('.intro');
    let match = document.querySelector('.match');
    let playBtn = document.querySelector('.intro button');
    playBtn.addEventListener('click', function () {
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
    });
    const hands = () => {
        let playerHand = document.querySelector('.player-hand');
        let playerOptions = document.querySelectorAll('.options button');
        let computerHand = document.querySelector('.computer-hand');
        let computerOptions = ['Rock', 'Paper', 'Scissor'];
        let hands = document.querySelectorAll('.hands img');
        hands.forEach( hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        });
        playerOptions.forEach( option => {
            option.addEventListener('click', function() {
                let computerNumber = Math.floor(Math.random() * 3);
                let computerChoice = computerOptions[computerNumber];
                setTimeout(() => {
                    computerHand.src = `assets/${computerChoice}.png`;
                    playerHand.src = `assets/${this.textContent}.png`;
                    compareHands(this.textContent, computerChoice);
                }, 2000);
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    }
    const compareHands = (playerChoice, computerChoice) => {
        let winner = document.querySelector('.winner');
        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a Tie';
            return;
        }
        if(playerChoice === 'Rock') {
            if(computerChoice === 'Scissor') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'Paper') {
            if(computerChoice === 'Scissor') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'Scissor') {
            if(computerChoice === 'Rock') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }
    const updateScore = () => {
        let playerScore = document.querySelector('.player-score p');
        let computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    hands();
}
game();


































