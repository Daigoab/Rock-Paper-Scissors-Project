let userScore = 0;
let computerScore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");

function getComputerChoice(){
    const choices = ["R", "P", "S"];
    const randomNumber = Math.floor (Math.random()* 3);
    return choices [randomNumber];
}

function convertToWord(letter) {
    if (letter === "R") return "Rock";
    if (letter === "P") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userscore_span.innerHTML = userScore
    computerscore_span.innerHTML = computerScore
    const smallUserWord = "You" .fontsize(3) .sub();
    const smallComputerWord = "Comp" .fontsize (3) .sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord}  beats  ${convertToWord (computerChoice)}${smallComputerWord} .You win!!!`
    userChoice_div.classList.add("green-glow");
    setTimeout(function() {userChoice_div.classList.remove("green-glow")}, 300)
}
function lose (userChoice, computerChoice) {
    computerScore++;
    userscore_span.innerHTML = userScore
    computerscore_span.innerHTML = computerScore
    const smallUserWord = "You" .fontsize(3) .sub();
    const smallComputerWord = "Comp" .fontsize (3) .sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord}  loses to  ${convertToWord (computerChoice)}${smallComputerWord} .You lost!!!`
    userChoice_div.classList.add("red-glow");
    setTimeout(function() {userChoice_div.classList.remove("red-glow")}, 300)
}

function draw (userChoice, computerChoice) {
    const smallUserWord = "You" .fontsize(3) .sub();
    const smallComputerWord = "Comp" .fontsize (3) .sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord}  equals  ${convertToWord (computerChoice)}${smallComputerWord} .It's a draw!!!`
    userChoice_div.classList.add("grey-glow");
    setTimeout(function() {userChoice_div.classList.remove("grey-glow")}, 300)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RP":
        case "PR":
        case "SP":
            win(userChoice, computerChoice);
        break;
        case "PR":
        case "PS":
        case "SR":
            lose(userChoice, computerChoice);
        break;
        case "RR":
        case "PP":
        case "SS":
            draw(userChoice, computerChoice);
    }
}

game("c");

function main () {
rock_div.addEventListener("click", function(){
    game("R")
})

paper_div.addEventListener("click", function(){
    game("P")
})

scissors_div.addEventListener("click", function(){
    game("S")
})
}

main ();