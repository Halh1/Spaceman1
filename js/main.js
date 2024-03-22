	/*----- constants -----*/
const KEYWORD_LOOKUP = ["MYSTERYMACHINE", "HEXGIRLS", "SCRAPPYDOO", "GHOSTCLOWN", "WHEREAREYOU"]
const HINT_LOOKUP = ["The van", "The girl Band", "Mini Scooby Doo", "The circus villan", "Famous 3 words"];

const tries = 6;

	/*----- state variables -----*/
let entered; //tracking what is being entered?
let correctLetters; // track if they are winning or not
let wrongLetters; // tracking letters that are wrong
let displayWordArr;  // want to track how many hints they use up
let currentWord;
let gameStatus;



	/*----- cached elements  -----*/
let imgEl = document.querySelector(".pumpkin");
let messageEl = document.getElementById("status");
let displayWord = document.getElementById("display");
let letterEl = document.getElementById("keyboard");
let restart = document.getElementById("reset")
let hintEl = document.getElementById("Hints-list");
// cache the hint button or just only have them as event listners

	/*----- event listeners -----*/
letterEl.addEventListener("click", handleClick);
restart.addEventListener("click", init);
hintEl.addEventListener("click", handleHint);

	/*----- functions -----*/

init();


function init() {
    correctLetters = KEYWORD_LOOKUP[Math.floor(Math.random() * KEYWORD_LOOKUP.length)].split(''); // should I randomize the hint and the keywords together?
    currentWord = correctLetters.map(() => "_");
    displayWord.innerText = currentWord.join(" ");
    wrongLetters = [];
    hintEl.style.visibility = "hidden"; // hint = []; //Trying to find away to connect the randomization of correctLetters with it's matching hint.
    imgEl.style.visibility = "hidden";
    messageEl.innerText = "Guess!";
    win = null;
    loss = null;

   // render();
}



function handleClick(event) {
    if (event.target.tagName !== "BUTTON") return;
    const key = event.target.textContent;
    //console.log(key);
    if(correctLetters.includes(key)) {
        correctLetters.forEach((char, idx) => {
            if (char === key) {
                currentWord[idx] = key 
            } 
        });
        displayWord.innerText = currentWord.join(" ");
        } else {
            wrongLetters.push(key);
        };  
       // alert(correctLetters); 
        //alert(wrongLetters);
        //win = checkWin();
        gameStatus = checkGameStatus();
        //render();
}

function  checkGameStatus() {
    if (wrongLetters.length < tries && wrongLetters.length > 0) {
        messageEl.innerText = "Zoinks Try Again";
        imgEl.src = `./img/pumpkin${wrongLetters.length}.png`;
        imgEl.style.visibility = "visible";
    } else if (wrongLetters.length === tries) {
        messageEl.innerText = `Game Over! The word was ${correctLetters.join("")}` ;
        imgEl.src = `./img/pumpkin5.png`;
    } else if (!currentWord.includes("_")) {
        messageEl.innerText = "You've won!";
    }

} 

function handleHint (event){
    let hint = event.target;
    if (event.target.tagName !== "BUTTON") {
       hint = HINT_LOOKUP[Math.floor(Math.random() * HINT_LOOKUP.length)];
       hint.style.visibility = "visible"; 
    }
}

