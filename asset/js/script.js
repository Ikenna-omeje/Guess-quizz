let countdownDisplay;
// Wait for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('button');
    const submitBtn = document.getElementById('btn');
    const resetBttn = document.getElementById('bttn');
    const answerBox = document.getElementById('answer-box');
    countdownDisplay = document.getElementById('countdown');//assign globally
    const stopBttn = document.getElementById('btttn')// added for stop button

    imageElement.addEventListener('click', handleClick);
    submitBtn.addEventListener('click', checkAnswer);
    resetBttn.addEventListener('click', resetGame);
    stopBttn.addEventListener('click', stopGame);

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
const countdownTime = 8; //Time between images per/sec

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

const imagePaths2  = [
    { image: "asset/image/Buffalo.jpg", answer: "Buffalo" },
    { image: "asset/image/Meerkats.jpg", answer: "Meerkats" },
    { image: "asset/image/pexels-Chameleon.jpg", answer: "Chameleon" },
    { image: "asset/image/pexels-Deer.jpg", answer: "Deer" },
    { image: "asset/image/pexels-Dogs.jpg", answer: "Dog" },
    { image: "asset/image/pexels-Eagle-53581.jpg", answer: "Eagle" },
    { image: "asset/image/pexels-Flamingos-39627.jpg", answer: "Flamingos" },
    { image: "asset/image/pexels-Hedgehogs.jpg", answer: "hedgehogs" },
    { image: "asset/image/pexels-hummingbird.jpg", answer: "Hummingbird" },
    { image: "asset/image/pexels-Lama-3396657.jpg", answer: "Lama" },
    { image: "asset/image/pexels-Lemurs-133459.jpg", answer: "Lemurs" },
    { image: "asset/image/pexels-monkey.jpg", answer: "Monkey" },
    { image: "asset/image/pexels-peacock.jpg", answer: "Peacock" },
    { image: "asset/image/pexels-Penquin.jpg", answer: "Penguin" },
    { image: "asset/image/pexels-Polar-Bear-65320.jpg", answer: "polar-Bear" },
    { image: "asset/image/pexels-Zebra-247376.jpg", answer: "Zebra" },
    { image: "asset/image/squirrel.jpg", answer: "Squirrel" },
    { image: "asset/image/Tiger.jpg", answer: "Tigar" },
];


// initialize and array to keep track of used image
let usedImagePath = [];
//function to generate a random index
function getRandomIndex(max) {
    let index;
    //loop untill we find an index that has never been used
    do {
        index = Math.floor(Math.random() * max);
        if (usedImagePath.length >= max) {// reset all images used

            usedImagePath = [];
        }
} while (usedImagePath.includes(index));

//add the new index to the used image list
    usedImagePath.push(index);

    return index;
}

//Function to handle the image click event

function handleClick() {
    if (imageCount >= maxImages) {
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

   
}
//function to check answer
function checkAnswer() {
    const answer = document.getElementById('answer-box').value.trim();
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

//Function to reset game
function resetGame() {
    document.getElementById('correct').innerText = '0';
    document.getElementById('incorrect').innerText = '0';
    document.getElementById('answer-box').style.backgroundColor = ''; // Reset background color
    imageCount = 0;

    //clear the used image array when the game is reset
    usedImagePath = [];
    clearInterval(imageInterval);//clear existing image on the interval
    clearInterval(countdownTimer);//clear existing count down timer
    countdownDisplay.innerText = '';//clear countdown display
    //handleClick();
    startGame();// start new game
}
//Function to start game
function startGame(){
    clearInterval(imageInterval);// clear existing image on the internal

    clearInterval(countdownTimer) //clear existing count down timer
    imageInterval = setInterval(() => {
    handleClick();

}, countdownTime * 1000); // Display a new image every 8 seconds

handleClick(); // Show the first image immediately
}

function stopGame() {

clearInterval(imageInterval); // Stop the interval for image changes

clearInterval(countdownTimer); // Stop the countdown timer

countdownDisplay.innerText = "Game Over"; // Show game over

alert('Game over!');

}

function toggleRules() {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }s
}

//function to start the countdown
function startCountdown() {

let timeLeft = countdownTime;
countdownDisplay.innerText = `Next image in: ${timeLeft} seconds`;

clearInterval(countdownTimer); // Clear any existing countdown

countdownTimer = setInterval(() => {
    timeLeft--;
    countdownDisplay.innerText = `Next image in: ${timeLeft} seconds`

    if (timeLeft <= 0) { 
        clearInterval(countdownTimer);
        if (imageCount < maxImages){

        }handleClick();
        //clearInterval(countdownTimer)//automatically move to the next image
       } 
    }, 1000);
}
    
//function to increase the right answer call
function incrementRightAnswer() {
    let preScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++preScore;
}

//function to increase the wrong answer call
function incrementWrongAnswer() {
    let preScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++preScore;
}