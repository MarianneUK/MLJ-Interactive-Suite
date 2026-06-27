let wordsViewed = Number(localStorage.getItem("wordsViewed")) || 0;
let correctAnswers = Number(localStorage.getItem("correctAnswers")) || 0;
let incorrectAnswers = Number(localStorage.getItem("incorrectAnswers")) || 0;

const wordsViewedElement = document.getElementById("wordsViewed");
const correctAnswersElement = document.getElementById("correctAnswers");
const incorrectAnswersElement = document.getElementById("incorrectAnswers");
const accuracyElement = document.getElementById("accuracy");
const resetStatsButton = document.getElementById("reset-stats-button");

function updateStatistics() {
    localStorage.setItem("wordsViewed", wordsViewed);
    localStorage.setItem("correctAnswers", correctAnswers);
    localStorage.setItem("incorrectAnswers", incorrectAnswers);

    wordsViewedElement.textContent = wordsViewed;
    correctAnswersElement.textContent = correctAnswers;
    incorrectAnswersElement.textContent = incorrectAnswers;

    const totalAnswers = correctAnswers + incorrectAnswers;

    if (totalAnswers === 0) {
        accuracyElement.textContent = "0%";
    } else {
        const accuracy = Math.round((correctAnswers / totalAnswers) * 100);
        accuracyElement.textContent = accuracy + "%";
    }
}

function resetStats() {
    wordsViewed = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;

    localStorage.setItem("wordsViewed", wordsViewed);
    localStorage.setItem("correctAnswers", correctAnswers);
    localStorage.setItem("incorrectAnswers", incorrectAnswers);

    updateStatistics();
}

if (resetStatsButton) {
    resetStatsButton.addEventListener("click", resetStats);
}

updateStatistics();