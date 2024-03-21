	/*----- constants -----*/
const KEYWORD_LOOKUP = ["MYSTERYMACHINE", "HEXGIRLS", "SCRAPPYDOO", "GHOSTCLOWN", "WHEREAREYOU"]
const HINT_LOOKUP = ["The van", "The girl Band", "Mini Scooby Doo", "The circus villan", "Famous 3 words"];

const tries = 6;

	/*----- state variables -----*/
let entered; //tracking what is being entered?
let correctLetters; // track if they are winning or not
let wrongLetters; // tracking letters that are wrong
  // want to track how many hints they use up
let currentWord;
let win; //tracking winnings 
let loss;



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
    displayWord.innerText = correctLetters.map((letter)=> letter === "" ? "" : "_").join(" ");
    currentWord = [];
    wrongLetters = [];
    hintEl.style.visibility = "hidden"; // hint = []; //Trying to find away to connect the randomization of correctLetters with it's matching hint.
    imgEl.style.visibility = "hidden";
    messageEl.innerText = "Guess!";
    win = null;
    loss = null;

   // render();
}



function handleClick(event) {
    const key = event.target.textContent;
    if (event.target.tagName === "BUTTON");
    //console.log(key);
    if(correctLetters.includes(key)) {
        correctLetters.forEach((char, idx) => {
            if (char === key) {
                const displayWordArr = displayWord.innerText.split("")
                displayWordArr[idx] = key;
                console.log(displayWordArr);
                displayWord.innerText = displayWordArr.join(""); 
            }
       
        });
        } else {
            wrongLetters.push(key);
        }  
       // alert(correctLetters); 
        //alert(wrongLetters);
        loss = checkLoss();
        //render();
}

function checkLoss() {
    if (wrongLetters.length < tries) {
        messageEl.innerText = "Try again";
        imgEl.src = `img/Pumpkin ${wrongLetters.length}.png`;
        imgEl.style.visibility = "visible";
    } else {
        messageEl.innerText = `Game Over! The word was ${correctLetters.join("")}` ;
        imgEl.src = `img/Pumpkin 6.png`;
    };
} 

function handleHint (event){
    let hint = event.target;
    if (event.target.tagName === "BUTTON") {
       hint = HINT_LOOKUP[Math.floor(Math.random() * HINT_LOOKUP.length)];
       hint.style.visibility = "visible"; 
    }
}
//function checkWin() {
//} 


//function renderImg(){
    //imgEl.src = `img/Scooby-Doo ${wrongLetters.length}.jpg`;
//}


//function for which hint, if correctletter === keylook[0] then hint === hintlook[0]
// function render() {
  //  imgEl.src = `img/Scooby-Doo ${wrongLetters.length - tries}.jpg`;

//} 
