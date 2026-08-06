/* jshint esversion:6 */

const themeNameMap = new Map([
    ["sea", "Sea"],
    ["land", "Land"],
    ["air", "Air"]
]);

const difficultyNames = ["Easy", "Medium", "Hard"];

const difficultyMap = new Map([
    ["easy", 0],
    ["medium", 1],
    ["hard", 2]
]);

// Game state
let currentTheme = "";
let currentDifficultyIndex = 0;
let currentQuestions = [];
let currentQuestionIndex = 0;
let currentScore;

// Sound
const disappointment = new Audio("assets/audio/universfield-crowd-disappointment-reaction-352718.mp3");
const applause = new Audio("assets/audio/roesisch-applause-01-253125.mp3");

/**
 *
 * @param {*} bound - The maximum return value + 1
 * @returns An integer between 0 and bound-1
 */
function randomInteger(bound) {
    return Math.floor(Math.random() * bound);
}

/**
 *
 * @param {*} as - an array to copy and shuffle
 * @returns a shuffled, shallow copy of the array
 */
function shuffle(as) {
    let bs = Array.from(as);

    function swap(j, k) {
        const temp = bs[j];
        bs[j] = bs[k];
        bs[k] = temp;
    }

    for (let i = bs.length - 1; i > 0; --i) {
        const source = randomInteger(i + 1);
        swap(source, i);
    }

    return bs;
}

// Show one section and hide the rest
function showSection(id) {
    const sections = ["hero", "set-selection", "difficulty-selection", "landing-stats", "landing-stats", "game-section", "round-complete-section"];
    for (const section of sections) {
        if (section === id) {
            document.getElementById(section).classList.remove("hidden");
        }
    }
    for (const section of sections) {
        if (section !== id) {
            document.getElementById(section).classList.add("hidden");
        }
    }
}

// One-time initialisation
function initialiseListeners(parent) {
    const buttons = parent.querySelectorAll(".answer-option-btn");
    for (const button of buttons) {
        button.addEventListener("click", answerClick);
    }
    const difficultyButtons = document.querySelectorAll("#difficulty-selection button");
    for (const button of difficultyButtons) {
        button.addEventListener("click", clickDifficulty);
    }
    const themes = document.querySelectorAll(".theme-card");
    for (const theme of themes) {
        theme.addEventListener("click", clickTheme);
    }
    document.getElementById("play-again-btn").addEventListener("click",
        () => { startGame(currentTheme); });
    document.getElementById("choose-set-btn").addEventListener("click",
        () => { showSection("difficulty-selection"); });
    document.getElementById("restart-btn").addEventListener("click",
        () => { showSection("difficulty-selection"); });
    document.querySelector("nav button").addEventListener("click", openInstructions);
    document.getElementById("close-instructions-btn").addEventListener("click", closeInstructions);
}

// Open the instructions
function openInstructions(e) {
    e.preventDefault();
    const modal = document.getElementById("instructions-modal");
    // It may be opened automatically in modern browsers
    if (!modal.open) {
        modal.showModal();
    }
}

// Close the instructions
function closeInstructions(e) {
    e.preventDefault();
    const modal = document.getElementById("instructions-modal");
    // It may be closed automatically in modern browsers
    if (modal.open) {
        modal.close();
    }
}

// Select the difficulty
function clickDifficulty(e) {
    const button = e.currentTarget;
    currentDifficultyIndex = difficultyMap.get(button.dataset.difficulty);
    showSection("set-selection");
}

// Select the game theme
function clickTheme(e) {
    const cardElement = e.currentTarget;
    startGame(cardElement.dataset.set);
}

// Initialise and start a game with the given theme
function startGame(theme) {
    document.getElementById("theme-value").textContent = themeNameMap.get(theme);
    document.getElementById("difficulty-value").textContent = difficultyNames[currentDifficultyIndex];

    currentTheme = theme;
    currentQuestions = shuffle(questions[theme][currentDifficultyIndex]).slice(0, 8);
    currentQuestionIndex = 0;
    currentScore = 0;

    displayQuestion(document.getElementById("game-section"), currentQuestions[currentQuestionIndex]);

    showSection("game-section");
}

// Display a question and update the scores, etc. in the game section
function displayQuestion(parent, question) {
    document.getElementById("question-count").textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;

    const progressBar = parent.querySelector(".progress-bar");
    const percent = 100 * (currentQuestionIndex + 1) / currentQuestions.length;
    progressBar.style.width = `${percent}%`;
    progressBar.setAttribute("aria-valuenow", percent);

    parent.querySelector(".clue-text").textContent = question.question;

    document.getElementById("score-value").textContent = currentScore;

    // Shuffle the options so they are displayed in a different order each time
    const options = shuffle(question.options);

    const buttons = parent.querySelectorAll(".answer-option-btn");
    for (let i = 0; i !== buttons.length; ++i) {
        const button = buttons[i];
        const creature = options[i];
        button.dataset.answer = creature;
        const url = `./assets/images/${creature.replace("-", "/")}.webp`;
        const niceName = animalNameMap.get(creature);
        const img = button.querySelector("img");
        img.src = url;
        img.alt = niceName;
        button.querySelector(".answer-name").textContent = niceName;
    }
}

// Accept a click on an answer in the game section
function answerClick(e) {
    if (currentQuestionIndex < currentQuestions.length) {
        const button = e.currentTarget;
        const answer = button.dataset.answer;
        if (answer === currentQuestions[currentQuestionIndex].animalName) {
            correctAnswer(button);
        } else {
            wrongAnswer(button);
        }
    }
}

// Handle a wrong answer
function wrongAnswer(button) {
    showFeedback(button, "answer-incorrect");
}

// Handle a correct answer
function correctAnswer(button) {
    currentScore++;
    document.getElementById("score-value").textContent = currentScore;
    showFeedback(button, "answer-correct");
}

// Show the feedback for either a correct or incorrect answer
function showFeedback(button, feedbackClass) {
    const buttons = button.parentElement.parentElement.querySelectorAll("button");
    for (const but of buttons) {
        but.setAttribute("disabled", "");
    }
    button.classList.add(feedbackClass);
    window.setTimeout(() => {
        button.classList.remove(feedbackClass);
        for (const but of buttons) {
            but.removeAttribute("disabled");
        }
        nextQuestion();
    }, 1500);
}

// Move to the next question or conclude the game
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex === currentQuestions.length) {
        gameOver();
    } else {
        displayQuestion(document.getElementById("game-section"), currentQuestions[currentQuestionIndex]);
    }
}

// Handle the end of the game
function gameOver() {
    if (currentScore === currentQuestions.length) {
        applause.play();
    } else {
        disappointment.play();
    }

    document.getElementById("final-score").textContent = `${currentScore * 10}`;
    document.getElementById("final-correct").textContent = `${currentScore} / ${currentQuestions.length}`;
    showSection("round-complete-section");
}

// Initialise everything
initialiseListeners(document.getElementById("game-section"));
// And show the opening screen
showSection("difficulty-selection");