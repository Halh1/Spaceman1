	/*----- constants -----*/
const KEYWORD_LOOKUP = ["Mytery Machine", "Hex Girls", "Scrappy Doo", "Ghost Clown", "Where Are You"]
const HINT_LOOKUP = ["The van", "The girl Band", "Mini Scooby Doo", "The circus villan", "Famous 3 words"];

const tries = 6;

	/*----- state variables -----*/
let entered; //tracking what is being entered?
let correctLetters; // track if they are winning or not
let wrongLetters; // tracking letters that are wrong
let hint;   // want to track how many hints they use up
let winner; //tracking winnings 




	/*----- cached elements  -----*/
let imgEl = document.getElementById("body");
let messageEl = document.querySelector("h1");
let displayWord = document.getElementById("display");
// cache the hint and restart button or just only have them as event listners

	/*----- event listeners -----*/
let letterEl = document.querySelector(".letters").addEventListener("click", handleClick);

	/*----- functions -----*/

init();
//initalizing all state

function init() {
    correctLetters = KEYWORD_LOOKUP[Math.floor(Math.random() * KEYWORD_LOOKUP.length)].split(''); // should I randomize the hint and the keywords together?
    displayWord.innerHTML = correctLetters.map((letter)=> letter === "" ? "" : "_").join(" ");
    wrongLetters = [];
    hint = []; //Trying to find away to connect the randomization of correctLetters with it's matching hint.
    render();
}



//function checkRightLetters() 

function handleClick(event) {
    let key;
    key = event.target.textContent;
    if (event.target.tagName == "BUTTON") return;
    render();
}


 function render() {
    //renderRightWord();
    //renderCorrect();
}

/*if (evt.target.tagName == "BUTTTON") {
    let key = evt.target.textContent;
    } else {
        whatIsEntered.value +=key;


checking if its correct:
        if (correctLetters.includes(key)) {
        correctLetters.forEach((char, idx)=> {
            if (char === key) displayWord[idx] = key;
        })
        }else {
            wrongLetters.push(key);
     }console.log(key);
    render();
}*/




/*

*/