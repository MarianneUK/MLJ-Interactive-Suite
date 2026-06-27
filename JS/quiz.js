const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const newQuestionButton = document.getElementById("newQuestion");

let correctWord;
let quizDeck = [];

function resetQuizDeck() {
    quizDeck = [...words].sort(() => Math.random() - 0.5);
}

function generateQuiz() {
    if (words.length < 4) {
        quizQuestion.textContent = "Not enough words to generate a quiz.";
        return;
    }

    quizFeedback.textContent = "";

    if (quizDeck.length === 0) {
        resetQuizDeck();
    }

    correctWord = quizDeck.pop();

    const wrongOptions = words
        .filter(function (word) {
            return word.id !== correctWord.id;
        })
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const options = [correctWord, ...wrongOptions]
        .sort(() => Math.random() - 0.5);

    quizQuestion.textContent = correctWord.definition;

    quizOptions.innerHTML = "";

    options.forEach(function (word) {
        const button = document.createElement("button");

        button.textContent = word.word;

        button.addEventListener("click", function () {
            const optionButtons = quizOptions.querySelectorAll("button");

            if (word.id === correctWord.id) {
                quizFeedback.textContent = "✅ Correct!";
                button.classList.add("correct");

                correctAnswers++;
                updateStatistics();
            } else {
                quizFeedback.textContent =
                    `❌ Incorrect. The answer was "${correctWord.word}".`;

                button.classList.add("incorrect");

                incorrectAnswers++;
                updateStatistics();

                optionButtons.forEach(function (btn) {
                    if (btn.textContent === correctWord.word) {
                        btn.classList.add("correct");
                    }
                });
            }

            optionButtons.forEach(function (btn) {
                btn.disabled = true;
            });
        });

        quizOptions.appendChild(button);
    });
}

newQuestionButton.addEventListener("click", generateQuiz);