/*Magnus Carlsen,Caruana Fabiano, Nakamura Hikaru, Nepomniachtchi Ian, Arjun Erigaisi, Nodirbek Abdusattorov, Gukesh Dommaraju, Wesley So, Praggnanandhaa Rameshbabu, Wei Yi*/
/* activate buttons and add event listeners*/

// Wait for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Select the image element by its ID
    let imageElement = document.getElementById('button');

    // Add a click event listener to the button
    imageElement.addEventListener('click', handleClick);
});


// Function to handle the image click event
let randomIndex;
    // Array of image paths
    let imagePaths = [
    {      
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
        answer: "chess-board"
    },
    {
        image:"asset/image/icons8-rook-94.png",
        answer: "rook"
    },
    {
        image:"asset/image/icons8-pawn-94.png",
        answer: "chess-pawn"
    },
    {
        image:"asset/image/icons8-chess-clock-96.png",
        answer: "chess-clock"
    },
    {
        image:"asset/image/icons8-ace-of-hearts-94.png",
        answer:"ace"   
    },
    {
        image:"asset/image/icons8-dice-94.png",
        answer:"dice"
    },
    {
        image:"asset/image/icons8-joker-96.png",
        answer:"joker"
    },
    {
        image:"asset/image/icons8-queen-of-diamonds-64.png",
        answer:"queen"
    },
    {
        image:"asset/image/icons8-king-of-diamonds-94.png",
        answer:"king"
    
    },
    {
        image:"asset/image/icons8-rubik's-cube-94.png",
        answer:"rubik's cube"
        
    },
    {
        image:"asset/image/icons8-knight-94.png",
        answer:"knight"    
    },
];       

        // Function to generate a random index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function handleClick() {
    let imagePaths = [
            
        "asset/image/icons8-king-94.png", 
        "asset/image/icons8-queen-94.png", 
        "asset/image/icons8-bishop-94.png",
        "asset/image/icons8-chess-board-64.png",
        "asset/image/icons8-rook-94.png",
        "asset/image/icons8-pawn-94.png",
        "asset/image/icons8-chess-clock-96.png",
        "asset/image/icons8-ace-of-hearts-94.png",
        "asset/image/icons8-dice-94.png",
        "asset/image/icons8-joker-96.png",
        "asset/image/icons8-queen-of-diamonds-64.png",
        "asset/image/icons8-king-of-diamonds-94.png",
        "asset/image/icons8-rubik's-cube-94.png",
        "asset/image/icons8-knight-94.png",
    ];
    // Generate a random index and select an image path
    let randomIndex = getRandomIndex(imagePaths.length);
    let randomImagePath = imagePaths[randomIndex];

    // Create an img element
    let imgElement = document.createElement('img');
    imgElement.src = randomImagePath;
    imgElement.alt = 'Random Image';
    imgElement.style.maxWidth = '100%'; // Responsive image

    // Clear the previous image and append the new one
    let imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous image
    imageContainer.appendChild(imgElement);
}


function runGame() {

}

function checkAnswer() {
        // Get answer from input element
        const answer = document.getElementById('answer-box').value
        // compare if answer is correct
        const choosenImage = imagePaths[randomIndex]
        if (choosenImage.answer == answer) {
            // Answer is correct
        } else {
            // Answer is incorrect
        }
        // Update score
    
    }
    


function calCurrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}