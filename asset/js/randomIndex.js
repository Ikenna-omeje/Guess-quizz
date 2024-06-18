/* activate buttons and add event listeners*/
randomIndex = [];
// Generate a random index and select an image path
const randomIndex = getRandomIndex(imagePaths.length);
const randomImagePath = imagePaths[randomIndex];
// Function to handle the image click event
const imageCount = 0;
const maxImages = 10;
const resetBttn = document.getElementById('bttn');
// Function to handle the image click event
// Wait for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Select the image element by its ID
    const imageElement = document.getElementById('button');
    // Add a click event listener to the button
    imageElement.addEventListener('click', handleClick);

});
// Array of image paths
imagePaths = [{
    image: "asset/image/icons8-king-94.png",
    answer: "King"
},
{
    image: "asset/image/icons8-queen-94.png",
    answer: "Queen"
},
{
    image: "asset/image/icons8-bishop-94.png",
    answer: "Bishop"
},
{
    image: "asset/image/icons8-chess-board-64.png",
    answer: "Chess board"
},
{
    image: "asset/image/icons8-rook-94.png",
    answer: "Rook"
},
{
    image: "asset/image/icons8-pawn-94.png",
    answer: "Pawn"
},
{
    image: "asset/image/icons8-chess-clock-96.png",
    answer: "Chess clock"
},
{
    image: "asset/image/icons8-ace-of-hearts-94.png",
    answer: "Ace"
},
{
    image: "asset/image/icons8-dice-94.png",
    answer: "Dice"
},
{
    image: "asset/image/icons8-joker-96.png",
    answer: "Joker"
},
{
    image: "asset/image/icons8-queen-of-diamonds-64.png",
    answer: "Queen"
},
{
    image: "asset/image/icons8-king-of-diamonds-94.png",
    answer: "King"
},
{
    image: "asset/image/icons8-rubik's-cube-94.png",
    answer: "Rubik's cube"
},
{
    image: "asset/image/icons8-knight-94.png",
    answer: "Knight"
},
];
// Function to generate a random index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
function handleClick() {


    // Create an img element
    let imgElement = document.createElement('img');
    imgElement.src = randomImagePath.image;
    imgElement.alt = 'Random Image';
    imgElement.style.maxWidth = '100%'; // Responsive image


    // Clear the previous image and append the new one
    let imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous image
    imageContainer.appendChild(imgElement);

}
function checkAnswer(event) {
    event.preventDefault();
    console.log("The submit BTN is working!!");
    // Get answer from input element
    const answer = document.getElementById('answer-box').value;
    // compare if answer is correct
    const choosenImage = imagePaths[randomIndex];
    if (choosenImage.answer.toLowerCase() == answer.toLowerCase()) {
        alert("Right Answer");
        incrementRightAnswer();
        // Answer is correct
    } else {
        alert(`Wrong Answer! The correct answer is ${choosenImage.answer}!`);
        incrementWrongAnswer();
        // Answer is incorrect
    }

}
const submitBtn = document.getElementById('btn');
// Add a click event listener to the button
submitBtn.addEventListener('click', checkAnswer);
function incrementRightAnswer() {
    let preScore = document.getElementById('correct').innerText;
    document.getElementById('correct').innerText = ++preScore;

}
function incrementWrongAnswer() {
    let preScore = document.getElementById('incorrect').innerText;
    document.getElementById('incorrect').innerText = ++preScore;

}
