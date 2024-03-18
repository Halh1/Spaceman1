	/*----- constants -----*/
const LETTERS_LOOKUP = { // should i change this to letter order?
    a: ["M", "y", "s", "t", "e", "r", "y", "M", "a", "c", "h", "i", "n", "e"],
    b: ["H", "e", "x", "G", "i", "r", "l", "s"],
    c: ["S", "c", "r", "a", "p", "p", "y", "D", "o", "o"],
    d: ["G", "h", "o", "s", "t", "C", "l", "o", "w", "n"],
    e: ["W", "h", "e", "r", "e", "A", "r", "e", "Y", "o", "u"]
}
const HINT_LOOKUP ={ // hint will actually auto fill some of the letters
    a: "The van",
    b: "The girl Band",
    c: "Mini Scooby Doo",
    d: "The circus villan",
    e: "Famous 3 words"


}

	/*----- state variables -----*/
let rightLetters; // tracking what being submitted and if it matches keywords
let correct; // track if they are winning or not
let hint;   // want to track how many hints they use up



	/*----- cached elements  -----*/
let imgEl = document.getElementById("body");
let messageEl = document.querySelector("h1")
// cache the hint and restart button or just only have them as event listners

	/*----- event listeners -----*/


	/*----- functions -----*/

init();
//initalizing all state

function init() {
    rightLetters = {
    a: ["null", "null", "null", "null", "null", "null", "y", "null", "null", "null", "null", "null", "null", "null"], //should i go the array route if so do you think i would neef the look up?
    b: ["null", "null", "null", "null", "null", "null", "null", "null" ],
    c: ["null", "null", "null", "null", "null", "null","null", "null", "null", "null"],
    d: ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
    e: ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"]
    };
    // 1) question: does it make sense to have all values initalized or just one because there is only on word being worked on at a time?
    correct = "unknown";    // wont need a winner function we just want an messaging saying correct or wrong try again

    render();
}


 function render() {
    renderRightWord();
    renderCorrect();
}

