	/*----- constants -----*/
const KEYWORD_LOOKUP = [
    "Mytery Machine",
    "Hex Girls",
    "Scrappy Doo",
    "Ghost Clown",
    "Where Are You"
]
const HINT_LOOKUP ={
    a: "The van",
    b: "The girl Band",
    c: "Mini Scooby Doo",
    d: "The circus villan",
    e: "Famous 3 words"


}
const tries = 6;

	/*----- state variables -----*/
let whatIsEntered = []; //tracking what is being entered?
let correctLetters = " "; // track if they are winning or not
let wrongLetters= []; // tracking letters that are wrong
let hint = {};   // want to track how many hints they use up




	/*----- cached elements  -----*/
let imgEl = document.getElementById("body");
let messageEl = document.querySelector("h1");
let displayWord = document.getElementById("display");
// cache the hint and restart button or just only have them as event listners

	/*----- event listeners -----*/
let letterEl = document.getElementById("letter").addEventListener("click", handleClick);

	/*----- functions -----*/

init();
//initalizing all state

function init() {
    correctLetters = KEYWORD_LOOKUP[Math.floor(Math.random() * KEYWORD_LOOKUP.length)].split('');
    displayWord = correctLetters.map((letter)=> letter === "" ? "" : "_");
    wrongLetters= [];
    hint = {};

    render();
}

function optionWord(){
    whatIsEntered = correctLetters.split("").map()
}

function handleClick(evt) {
    if (evt.target.tagName == "BUTTTON") {
        let key = evt.target.textContent;
        } else {
            whatIsEntered.value +=key;
    }
    render();
}
 function render() {
    //renderRightWord();
    //renderCorrect();
}

