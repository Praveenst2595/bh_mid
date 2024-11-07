// Story stages for the cricket-themed adventure game
const storyStages = {
    start: {
        text: "You're at a cricket match. Your team is about to bat. Do you want to open the batting or be a middle-order batsman?",
        choices: [
            { text: "Open the batting", consequence: "openBatting" },
            { text: "Middle-order batsman", consequence: "middleOrder" }
        ],
        image: "cricket_pitch.png"
    },
    openBatting: {
        text: "You open the batting and face the first ball. Do you want to play an aggressive shot or defend the ball?",
        choices: [
            { text: "Aggressive shot", consequence: "aggressiveShot" },
            { text: "Defend", consequence: "defendBall" }
        ],
        image: "opening_batting.png"
    },
    middleOrder: {
        text: "You're in the middle order. Your team needs 50 runs in 5 overs. Do you want to play it safe or go for big shots?",
        choices: [
            { text: "Play safe", consequence: "playSafe" },
            { text: "Go for big shots", consequence: "bigShots" }
        ],
        image: "middle_order_batsman.png"
    },
    aggressiveShot: {
        text: "You go for an aggressive shot but miss and get bowled out! The game ends.",
        choices: [],
        image: "aggressive_shot.png"
    },
    defendBall: {
        text: "You defend the ball successfully and settle in. Do you want to play a cover drive or a pull shot?",
        choices: [
            { text: "Cover drive", consequence: "coverDrive" },
            { text: "Pull shot", consequence: "pullShot" }
        ],
        image: "defend_ball.png"
    },
    playSafe: {
        text: "You play it safe and rotate the strike. The game ends successfully with your team winning.",
        choices: [],
        image: "play_safe.png"
    },
    bigShots: {
        text: "You go for big shots but get caught out! The game ends.",
        choices: [],
        image: "big_shots.png"
    },
    coverDrive: {
        text: "You play a perfect cover drive and hit a boundary! Your team wins the game!",
        choices: [],
        image: "cover_drive.png"
    },
    pullShot: {
        text: "You hit a brilliant pull shot but get caught in the deep! The game ends.",
        choices: [],
        image: "pull_shot.png"
    }
};

let currentStage = 'start';

// Function to initialize the game
function startGame() {
    currentStage = 'start';
    updatePage();
}

// Function to update the content based on the current stage
function updatePage() {
    const stage = storyStages[currentStage];
    const storyDiv = document.getElementById('story');
    const choicesDiv = document.getElementById('choices');
    
    // Update the story text and image
    storyDiv.innerHTML = `<p id="storyText">${stage.text}</p><img id="storyImage" src="${stage.image}" alt="Story Image">`;

    // Clear previous choices
    choicesDiv.innerHTML = ''; 

    // Create buttons for choices if available
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choiceButton');
        button.addEventListener('click', () => {
            currentStage = choice.consequence;
            updatePage();
        });
        choicesDiv.appendChild(button);
    });

    // Show a restart button if there are no choices left
    if (stage.choices.length === 0) {
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.classList.add('choiceButton');
        restartButton.addEventListener('click', startGame);
        choicesDiv.appendChild(restartButton);
    }
}

// Event listener to start the game once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', startGame);

// Update the last modified date in the footer
document.getElementById('lastModified').textContent = document.lastModified;
