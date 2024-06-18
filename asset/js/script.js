/* activate buttons and add event listeners*/
randomIndex=[]
// Wait for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Select the image element by its ID
    const imageElement = document.getElementById('button');
    // Add a click event listener to the button
    imageElement.addEventListener('click', handleClick);
  
});
let imageCount = 0;
const maxImages = 7;
const resetButton = document.getElementById('bttn');


// Function to handle the image click event
    // Array of image paths
    let imagePaths = [{      
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
        image:"asset/image/icons8-chess-board-64.png",
        answer: "chess board"
       
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
        answer: "chess-clock"
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
        image:"asset/image/icons8-king-of-diamonds-94.png",
        answer:"king"

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
// Function to generate a random index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function handleClick() {}
    

    // Function to handle the image click event
function handleClick() {
    // Generate a random index and select an image path
    randomIndex = getRandomIndex(imagePaths.length);
    let randomImagePath = imagePaths[randomIndex];

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

 /*function resetGame() {
        imageCount = 0; // Reset image count
        resetButton.disabled = false; // Re-enable the start button
    }*/
    
    // Function to start the game
   function resetGame() {
    const resetButton = document.getElementById('bttn');
        resetButton.disabled = true; // Disable the start button
        handleClick();
        const imageInterval = setInterval(() => {
            if (imageCount < maxImages) {
                handleClick();
            } else {
                clearInterval(imageInterval);
                incrementRightAnswer()== 0;
                incrementWrongAnswer()== 0;

            }
        }, 5000); // Display a new image every second
    }

    // Add event listener to the start button
    resetButton.addEventListener('click', resetGame);




function checkAnswer() {
        // Get answer from input element
        const answer = document.getElementById('answer-box').value
        // compare if answer is correct
        const choosenImage = imagePaths[randomIndex]
        if (choosenImage.answer.toLowerCase() == answer.toLowerCase()) {
            alert("Right Answer");
            incrementRightAnswer();
            // Answer is correct
        } else { alert(`Wrong Answer! The correct answer is ${choosenImage.answer}!`)
        incrementWrongAnswer();
        
            // Answer is incorrect
        
        // Update score
    }
}

const submitBtn = document.getElementById('btn');
// Add a click event listener to the button
submitBtn.addEventListener('click', checkAnswer);

function incrementRightAnswer() {
    let preScore=document.getElementById('correct').innerText;
    document.getElementById('correct').innerText = ++preScore;

}

function incrementWrongAnswer() {
    let preScore=document.getElementById('incorrect').innerText;
    document.getElementById('incorrect').innerText = ++preScore;

}


