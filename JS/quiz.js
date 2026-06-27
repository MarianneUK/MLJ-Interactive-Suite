const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const newQuestionButton = document.getElementById("newQuestion");

let correctWord;

function generateQuiz() {

    if (words.length < 4) {
        quizQuestion.textContent = "Not enough words to generate a quiz.";
        return;
    }

    quizFeedback.textContent = "";

    const shuffled = [...words].sort(() => Math.random() - 0.5);

    const options = shuffled.slice(0, 4);

    correctWord = options[Math.floor(Math.random() * options.length)];

    quizQuestion.textContent = correctWord.definition;

    quizOptions.innerHTML = "";

    options.forEach(function(word) {

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