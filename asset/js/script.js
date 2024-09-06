// Wait for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('button');
    const submitBtn = document.getElementById('btn');
    const resetBttn = document.getElementById('bttn');
    const answerBox = document.getElementById('answer-box');
    const countdownDisplay = document.getElementById('countdown');
   // const stopGame = document.getElementById("stopGame")

    imageElement.addEventListener('click', handleClick);
    submitBtn.addEventListener('click', checkAnswer);
    resetBttn.addEventListener('click', resetGame);
    //stopBttn.addEventListener("click", stopGame);

    answerBox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the form from submitting if it's inside a form element
            checkAnswer();
        }
    });
});

let imageCount = 0;
const maxImages = 8;
let randomIndex = 0;
let imageInterval;
let countdownTimer;
const countdownTime = 8 //Time between images 

// Function to handle the image click event
    // Array of image paths
const imagePaths = [
    { image: "asset/image/icons8-king-94.png", answer: "King" },
    { image: "asset/image/icons8-queen-94.png", answer: "Queen" },
    { image: "asset/image/icons8-bishop-94.png", answer: "Bishop" },
    { image: "asset/image/icons8-chess-board-64.png", answer: "chess board" },
    { image: "asset/image/icons8-rook-94.png", answer: "Rook" },
    { image: "asset/image/icons8-pawn-94.png", answer: "Pawn" },
    { image: "asset/image/icons8-chess-clock-96.png", answer: "Timer" },
    { image: "asset/image/icons8-ace-of-hearts-94.png", answer: "Ace" },
    { image: "asset/image/icons8-dice-94.png", answer: "Dice" },
    { image: "asset/image/icons8-joker-96.png", answer: "Joker" },
    { image: "asset/image/icons8-queen-of-diamonds-64.png", answer: "Queen" },
    { image: "asset/image/icons8-king-of-diamonds-94.png", answer: "King" },
    { image: "asset/image/icons8-rubik's-cube-94.png", answer: "Rubik's cube" },
    { image: "asset/image/icons8-knight-94.png", answer: "Knight" },
];

// initialize and array to keep track of used image
let usedImagePath = [];
//function to generate a random index
function getRandomIndex(max) {
    let index;
    //loop untill we find an index that has never been used
    do {
        index = Math.floor(Math.random() * max);
} while (usedImagePath.includes(index));

//add the new index to the used image list

usedImagePath.push(index);

return index;
}

//function to startgame

function handleClick() {
    if (imageCount >= maxImages) {
        //document.getElementById('correct').innerText = '0';
        //document.getElementById('incorrect').innerText = '0';

         //resetGame(); //authomatically reset game
         stopGame();
        return;
    }
 // Generate a random index and select an image path

    randomIndex = getRandomIndex(imagePaths.length);
    let randomImagePath = imagePaths[randomIndex];
// Create an img element

    let imgElement = document.createElement('img');
    imgElement.src = randomImagePath.image;
    imgElement.alt = 'Random Image';
    imgElement.style.maxWidth = '100%';

 // Clear the previous image and append the new one
    let imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);

    imageCount++;
    startCountdown(); //start coundown for next image

   /* if (imageCount >= maxImages) {
        alert('You have reached the maximum number of images.');
        clearInterval(imageInterval);
        handleClick(); 
    }*/
}
//function to check answer
function checkAnswer() {
    const answer = document.getElementById('answer-box').value;
    const choosenImage = imagePaths[randomIndex];

    if (choosenImage.answer.toLowerCase() === answer.toLowerCase()) {
       document.getElementById('answer-box').style.backgroundColor = 'green';
        incrementRightAnswer();//answer correct
    } else {
        alert(`Wrong Answer! The correct answer is ${choosenImage.answer}!`);
        document.getElementById('answer-box').style.backgroundColor = 'red';
        incrementWrongAnswer();
        //answer incorrect
    }
    // Clear the answer box
    document.getElementById('answer-box').value = '';
    //return;
}

function resetGame() {
    document.getElementById('correct').innerText = '0';
    document.getElementById('incorrect').innerText = '0';
    document.getElementById('answer-box').style.backgroundColor = ''; // Reset background color
    imageCount = 0;

    //clear the used image array when the game is reset
    usedImagePath = [];
    //handleClick();
    startGame();
}

function startGame(){
    clearInterval(imageInterval);
    imageInterval = setInterval(() => {
    handleClick();

}, countdownTime * 1000); // Display a new image every 8 seconds

handleClick(); // Show the first image immediately
}

function stopGame() {

clearInterval(imageInterval); // Stop the interval for image changes

clearInterval(countdownTimer); // Stop the countdown timer

document.getElementById('countdown').innerText = "Game Over"; // Show game over

alert('You have reached the maximum number of images. The game is over.');

}

function startCountdown() {

let timeLeft = countdownTime;

countdownDisplay.innerText = `Next image in: ${timeLeft} seconds`;

clearInterval(countdownTimer); // Clear any existing countdown

countdownTimer = setInterval(() => {

    timeLeft--;

    countdownDisplay.innerText = `Next image in: ${timeLeft} seconds`;

    if (timeLeft <= 0) {

        clearInterval(countdownTimer);

    }

}, 1000);

}

    /*imageInterval = setInterval(() => {
        if (imageCount < maxImages) {
            handleClick();
        } else {
            clearInterval(imageInterval);
        }
    }, 8000); // Display a new image every 8 seconds
}*/

function incrementRightAnswer() {
    let preScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++preScore;
}

function incrementWrongAnswer() {
    let preScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++preScore;
}