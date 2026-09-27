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

    function updateDisplay(roundResult) {
        const roundResultDisplay = document.querySelector("#round-result");
        const humanPointsDisplay = document.querySelector("#human-points");
        const computerPointsDisplay = document.querySelector("#cpu-points");

        roundResultDisplay.textContent = "Round result: " + roundResult;
        humanPointsDisplay.textContent = "Your points: " + humanScore;
        computerPointsDisplay.textContent = "Computer's points: " + computerScore;
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

    const rockSelection = document.querySelector("#rock-selection").addEventListener("click", () => playRound("rock"));
    const paperSelection = document.querySelector("#paper-selection").addEventListener("click", () => playRound("paper"));
    const scissorsSelection = document.querySelector("#scissors-selection").addEventListener("click", () => playRound("scissors"));
}

playGame();