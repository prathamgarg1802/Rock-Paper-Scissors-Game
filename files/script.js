let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const mssg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const drawGame = () => {
    console.log("Game is draw.")
    mssg.innerText = "Game is Draw. Play again."
    mssg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        console.log("You win.")
        mssg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`
        mssg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose")
        mssg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`
        mssg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) =>{
    console.log("userChoice is", userChoice)
    // Generation of computer choice
    const compChoice = genCompChoice()
    console.log("compChoice is", compChoice)

    //Draw condition
    if(userChoice === compChoice){
        drawGame()
    }else{
        let userWin = true
        if(userChoice === "rock"){
            // comp choice will be paper and scissor
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // comp choice will be rock and scissor
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // comp choice will be rock paper
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})