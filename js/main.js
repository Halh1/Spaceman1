	/*----- constants -----*/
const KEYWORD_LOOKUP = ["MYSTERY MACHINE", "HEX GIRLS", "SCRAPPY DOO", "GHOST CLOWN", "WHERE ARE YOU"]
const HINT_LOOKUP = ["The van", "The girl Band", "Mini Scooby Doo", "The circus villan", "Famous 3 words"];

const tries = 6;

	/*----- state variables -----*/
let entered; //tracking what is being entered?
let correctLetters; // track if they are winning or not
let wrongLetters; // tracking letters that are wrong
  // want to track how many hints they use up
let currentWord;
let winner; //tracking winnings 
let loss;



	/*----- cached elements  -----*/
let imgEl = document.getElementById("image");
let messageEl = document.getElementById("status");
let displayWord = document.getElementById("display");
let letterEl = document.getElementById("keyboard");
let restart = document.getElementById("reset")
let hintEl = document.getElementById("Hints-list");
// cache the hint button or just only have them as event listners

	/*----- event listeners -----*/
letterEl.addEventListener("click", handleClick);
restart.addEventListener("click", init);
//hintEl.addEventListener("click", )

	/*----- functions -----*/

init();


function init() {
    correctLetters = KEYWORD_LOOKUP[Math.floor(Math.random() * KEYWORD_LOOKUP.length)].split(''); // should I randomize the hint and the keywords together?
    displayWord.innerText = correctLetters.map((letter)=> letter === "" ? "" : "_").join(" ");
    currentWord = [];
    wrongLetters = [];
    hint = []; //Trying to find away to connect the randomization of correctLetters with it's matching hint.
    hintEl.style.display = "none";
    imgEl.style.display ="none";
    messageEl.innerText = "Guess!";
    loss = null;

   // render();
}



function handleClick(event) {
    const key = event.target.textContent
    if (event.target.tagName === "BUTTON");
    //console.log(key);
    if(correctLetters.includes(key)) {
        correctLetters.forEach((char, idx) => {
            if (char === key) displayWord[idx].innerText = key;
       
        });
        } else {
            wrongLetters.push(key);
        }  
        alert(correctLetters); 
        alert(wrongLetters);
        loss = checkLoss();
        render();
}
function checkLoss() {
    if (wrongLetters.length < tries) {
        messageEl.innerText = "Try again";
        imgEl.src = `img/Scooby-Doo${wrongLetters.length}.jpg`;
        imgEl.style.display = "block";
    } else {
        messageEl.innerText = "Game Over!";
        imgEl.src = `img/Scooby-Doo 0.jpg`;
    }

    
} 

function checkWin() {
    if (currentWord.length === correctLetters.length) messageEl.innerText = "You've won!";
} // not working b/c i need to fix array


//function renderImg(){
    //imgEl.src = `img/Scooby-Doo ${wrongLetters.length}.jpg`;
//}


//function for which hint, if correctletter === keylook[0] then hint === hintlook[0]
// function render() {
  //  imgEl.src = `img/Scooby-Doo ${wrongLetters.length - tries}.jpg`;

//} 
