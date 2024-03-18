	/*----- constants -----*/
const KEYWORD_LOOKUP = [
    "Mytery Machine",
    "HexGirls",
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
let correct = " "; // track if they are winning or not
let wrongGuess= []; // tracking letters that are wrong
let hint = {};   // want to track how many hints they use up




	/*----- cached elements  -----*/
let imgEl = document.getElementById("body");
let messageEl = document.querySelector("h1")
// cache the hint and restart button or just only have them as event listners

	/*----- event listeners -----*/
document.getElementById("letter").addEventListener("click", handleClick);

	/*----- functions -----*/

init();
//initalizing all state

function init() {
    correct = KEYWORD_LOOKUP[Math.floor(Math.random() * KEYWORD_LOOKUP.length)].split('');
    whatIsEntered = correct.map((letter)=> letter === "" ? "" : "_");
    wrongGuess= [];
    hint = {};

    render();
}

function handleClick(evt) {
    if (evt.currentTarget.id == "letter") {
        console.log("letter click");
    }
function randomWord() {
    correct = LETTERS_LOOKUP[Math.floor(math.random() * LETTERS_LOOKUP.length)];
    alert(correct);
}
}
 function render() {
    //renderRightWord();
    //renderCorrect();
}

