let wordsViewed = Number(localStorage.getItem("wordsViewed")) || 0;
let correctAnswers = Number(localStorage.getItem("correctAnswers")) || 0;
let incorrectAnswers = Number(localStorage.getItem("incorrectAnswers")) || 0;

let correctMatches = Number(localStorage.getItem("correctMatches")) || 0;
let incorrectMatches = Number(localStorage.getItem("incorrectMatches")) || 0;

const wordsViewedElement = document.getElementById("wordsViewed");
const correctAnswersElement = document.getElementById("correctAnswers");
const incorrectAnswersElement = document.getElementById("incorrectAnswers");

const correctMatchesElement = document.getElementById("correctMatches");
const incorrectMatchesElement = document.getElementById("incorrectMatches");

const accuracyElement = document.getElementById("accuracy");
const resetStatsButton = document.getElementById("reset-stats-button");

function updateStatistics() {
    localStorage.setItem("wordsViewed", wordsViewed);
    localStorage.setItem("correctAnswers", correctAnswers);
    localStorage.setItem("incorrectAnswers", incorrectAnswers);
    localStorage.setItem("correctMatches", correctMatches);
    localStorage.setItem("incorrectMatches", incorrectMatches);

    wordsViewedElement.textContent = wordsViewed;
    correctAnswersElement.textContent = correctAnswers;
    incorrectAnswersElement.textContent = incorrectAnswers;

    correctMatchesElement.textContent = correctMatches;
    incorrectMatchesElement.textContent = incorrectMatches;

    const totalAnswers =
        correctAnswers +
        incorrectAnswers +
        correctMatches +
        incorrectMatches;

    const totalCorrect =
        correctAnswers +
        correctMatches;

    if (totalAnswers === 0) {
        accuracyElement.textContent = "0%";
    } else {
        const accuracy = Math.round((totalCorrect / totalAnswers) * 100);
        accuracyElement.textContent = accuracy + "%";
    }
}

function resetStats() {
    wordsViewed = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    correctMatches = 0;
    incorrectMatches = 0;

    localStorage.setItem("wordsViewed", wordsViewed);
    localStorage.setItem("correctAnswers", correctAnswers);
    localStorage.setItem("incorrectAnswers", incorrectAnswers);
    localStorage.setItem("correctMatches", correctMatches);
    localStorage.setItem("incorrectMatches", incorrectMatches);

    updateStatistics();
}

if (resetStatsButton) {
    resetStatsButton.addEventListener("click", resetStats);
}

updateStatistics();