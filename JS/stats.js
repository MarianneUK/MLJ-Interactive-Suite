let wordsViewed = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const wordsViewedElement = document.getElementById("wordsViewed");
const correctAnswersElement = document.getElementById("correctAnswers");
const incorrectAnswersElement = document.getElementById("incorrectAnswers");
const accuracyElement = document.getElementById("accuracy");

function updateStatistics() {

    wordsViewedElement.textContent = wordsViewed;
    correctAnswersElement.textContent = correctAnswers;
    incorrectAnswersElement.textContent = incorrectAnswers;

    const totalAnswers = correctAnswers + incorrectAnswers;

    if (totalAnswers === 0) {
        accuracyElement.textContent = "0%";
    } else {

        const accuracy =
            Math.round((correctAnswers / totalAnswers) * 100);

        accuracyElement.textContent = accuracy + "%";
    }

}