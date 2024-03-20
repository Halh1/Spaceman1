	/*----- constants -----*/
const KEYWORD_LOOKUP = ["MYSTERY MACHINE", "HEX GIRLS", "SCRAPPY DOO", "GHOST CLOWN", "WHERE ARE YOU"]
const HINT_LOOKUP = ["The van", "The girl Band", "Mini Scooby Doo", "The circus villan", "Famous 3 words"];

const tries = 6;

	/*----- state variables -----*/
let entered; //tracking what is being entered?
let correctLetters; // track if they are winning or not
let wrongLetters; // tracking letters that are wrong
  // want to track how many hints they use up
let winner; //tracking winnings 



	/*----- cached elements  -----*/
let imgEl = document.getElementById("body");
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
    wrongLetters = [];
    hint = []; //Trying to find away to connect the randomization of correctLetters with it's matching hint.
    messageEl.innerText = "Guess!";
    render();
}



function handleClick(event) {
    const key = event.target.textContent
   // if (event.target.tagName === "BUTTON");
    //console.log(key);
    if(correctLetters.includes(key)) {
        correctLetters.forEach((char, idx) => {
            if (char === key) displayWord[idx]= key;
        });
        } else {
            wrongLetters.push(key);
        }  
        alert(correctLetters); 
        alert(wrongLetters);
    render();
   
}


 

 function render() {

}
