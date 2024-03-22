/*----- constants -----*/
const KEYWORD_LOOKUP = ["MYSTERYMACHINE", "HEXGIRLS", "SCRAPPYDOO", "GHOSTCLOWN", "WHEREAREYOU"];

const tries = 6;

/*----- state variables -----*/
let correctLetters;
let wrongLetters;
let displayWordArr;
let currentWord;
let gameStatus;



/*----- cached elements  -----*/
let imgEl = document.querySelector(".pumpkin");
let messageEl = document.getElementById("status");
let displayWord = document.getElementById("display");
let letterEl = document.getElementById("keyboard");
let restart = document.getElementById("reset");

/*----- event listeners -----*/
letterEl.addEventListener("click", handleClick);
restart.addEventListener("click", init);

/*----- functions -----*/

init();


function init() {
    correctLetters = KEYWORD_LOOKUP[Math.floor(Math.random() * KEYWORD_LOOKUP.length)].split('');
    currentWord = correctLetters.map(() => "_");
    displayWord.innerText = currentWord.join(" ");
    wrongLetters = [];
    imgEl.style.visibility = "hidden";
    messageEl.innerText = "Guess!";
    win = null;
    loss = null;

}



function handleClick(event) {
    if (event.target.tagName !== "BUTTON") return;
    const key = event.target.textContent;
    if (correctLetters.includes(key)) {
        correctLetters.forEach((char, idx) => {
            if (char === key) {
                currentWord[idx] = key;
            };
        });
        displayWord.innerText = currentWord.join(" ");
    } else {
        wrongLetters.push(key);
    };
    gameStatus = checkGameStatus();

}

function checkGameStatus() {
    if (!currentWord.includes("_")) {
        messageEl.innerText = "You've won!";
    };
    if (wrongLetters.length < tries && wrongLetters.length > 0) {
        messageEl.innerText = "Zoinks! Try Again";
        imgEl.src = `./img/pumpkin${wrongLetters.length}.png`;
        imgEl.style.visibility = "visible";
    } else if (wrongLetters.length === tries) {
        messageEl.innerText = `Game Over! It was ${correctLetters.join("")}`;
        imgEl.src = `./img/pumpkin6.png`;
    };
}



