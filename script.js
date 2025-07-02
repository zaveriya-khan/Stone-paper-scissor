let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw 🥲";
    msg.style.backgroundImage = "url('images/draw-img.jpg')";
    msg.style.backgroundSize = "cover";
    msg.style.backgroundPosition = "10% 40%";
    msg.style.color = "#fff";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Hurray 🥳 You Won!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundImage = "url('images/win-img.jpg')";
        msg.style.backgroundSize = "cover";
        msg.style.backgroundPosition = "center";
        msg.style.color = "#fff";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose 🤣 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundImage = "url('images/lost-img.jpg')";
        msg.style.backgroundSize = "cover";
        msg.style.backgroundPosition = "center";
        msg.style.color = "#fff";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});