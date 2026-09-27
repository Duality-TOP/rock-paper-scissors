function playGame() {
    function getComputerChoice() {
        const random = Math.floor(Math.random() * 3);

        switch (random) {
            case 0: return 'rock';
            case 1: return 'paper';
            case 2: return 'scissors';
        }
    }
    
    let humanScore = 0;
    let computerScore = 0;

    const roundResultDisplay = document.querySelector("#round-result");
    const humanPointsDisplay = document.querySelector("#human-points");
    const computerPointsDisplay = document.querySelector("#cpu-points");
    
    function updateDisplay(roundResult) {
        roundResultDisplay.textContent = "Round result: " + roundResult;
        humanPointsDisplay.textContent = "Your points: " + humanScore;
        computerPointsDisplay.textContent = "Computer's points: " + computerScore;
    }

    function endMatch() {
        roundResultDisplay.textContent = "You've ended the match. Select any option again and the game will restart";

        humanScore = 0;
        computerScore = 0;

        updateDisplay("The game has been resetted.");
    }

    function playRound(humanSelection) {
        const computerSelection = getComputerChoice();

        if (humanSelection === computerSelection) {
            updateDisplay("Tie in the round.");
        } else if (
            humanSelection === "rock" && computerSelection === "scissors" ||
            humanSelection === "paper" && computerSelection === "rock" ||
            humanSelection === "scissors" && computerSelection === "paper"
        ) {
            humanScore++;
            updateDisplay("You won the round! Your points were incremented by one.");
        } else {
            computerScore++;
            updateDisplay("The computer won the round! His points were incremented by one.");
        }
    }

    const rockSelectionBtn = document.querySelector("#rock-selection").addEventListener("click", () => playRound("rock"));
    const paperSelectionBtn = document.querySelector("#paper-selection").addEventListener("click", () => playRound("paper"));
    const scissorsSelectionBtn = document.querySelector("#scissors-selection").addEventListener("click", () => playRound("scissors"));

    const endMatchBtn = document.querySelector("#end-match").addEventListener("click", () => endMatch());
}

playGame();