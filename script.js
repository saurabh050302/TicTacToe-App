// JavaScript

console.log("Welcome to tic tac toe");

let gameStartMusic = new Audio("Recources/gameStart.mp3");
let turnMusic = new Audio("Recources/nextTurn.mp3");
let gameOverMusic = new Audio("Recources/gameOver.mp3");

// gameStartMusic.play();
// gameStartMusic.loop = true;

let turn = "X";

// Fxn to change Turn
const changeTurn = () => turn = (turn === "X") ? "O" : "X";


// Fxn to check win
let excitedGIF = document.querySelector(".excitedGIF");
let line = document.querySelector(".line");
let gameOver = false;
const checkWin = () => {
    // let boxTexts = document.getElementsByClassName("boxText");
    let boxTextsArray = Array.from(document.getElementsByClassName("boxText"));
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 16, 0],
        [6, 7, 8, 0, 27, 0],
        [0, 3, 6, -11, 16, 90],
        [1, 4, 7, 0, 16, 90],
        [2, 5, 8, 11, 16, 90],
        [0, 4, 8, 0, 16, 45],
        [2, 4, 6, 0, 16, -45]
    ];

    wins.forEach((e) => {
        if ((boxTextsArray[e[0]].innerText === boxTextsArray[e[1]].innerText) &&
            (boxTextsArray[e[1]].innerText === boxTextsArray[e[2]].innerText) &&
            (boxTextsArray[e[0]].innerText !== "")) {
            document.getElementsByClassName("info")[0].innerHTML = `${boxTextsArray[e[0]].innerText}  wonnnn`;
            excitedGIF.style.opacity = 1;
            line.style.width = "95%";
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            gameOver = true;
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
let boxTexts = document.getElementsByClassName("boxText");
Array.from(boxes).forEach((element, i) => {
    element.addEventListener('click', () => {
        if (Array.from(boxTexts)[i].innerHTML == "") {
            Array.from(boxTexts)[i].innerHTML = turn;
            changeTurn();
            turnMusic.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerHTML = `Turn for ${turn}`;
            }
        }
    })
});

//Reset Button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', () => {
    Array.from(boxTexts).forEach((element) => {
        element.innerHTML = "";
    })
    turn = "X";
    excitedGIF.style.display = "none";
    line.style.width = "0";
    document.getElementsByClassName("info")[0].innerHTML = `Turn for ${turn}`;
});