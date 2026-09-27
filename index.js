function playGame() {
    function getComputerChoice() {
        const computerSelection = Math.floor(Math.random() * 3);

        switch (computerSelection) {
            case 0: return "rock";
            case 1: return "paper";
            case 2: return "scissors";
        }
    }

    function getHumanChoice() {
        const humanSelection = prompt("Choose rock, paper or scissors.");

        switch (humanSelection.toLowerCase()) {
            case "rock": return "rock";
            case "paper": return "paper";
            case "scissors": return "scissors";
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            return "Tie.";
        } else if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            humanScore++;
            return "You won the round! Your points were incremented by one.";
        } else {
            computerScore++;
            return "The computer won the round! His points were incremented by one.";
        }
    }

    const rockSelection = addEventListener("click", () => playRound("rock"));
    const paperSelection = addEventListener("click", () => playRound("paper"));
    const scissorsSelection = addEventListener("click", () => playRound("scissors"));
}

playGame();
// yes, i know theres some repetition here, but its just a little bit