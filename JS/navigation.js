const flashcardsButton = document.getElementById("flashcardsButton");
const quizButton = document.getElementById("quizButton");
const matchingButton = document.getElementById("matchingButton");

const flashcardsSection = document.getElementById("flashcardsSection");
const quizSection = document.getElementById("quizSection");
const matchingSection = document.getElementById("matchingSection");

function showActivity(activity) {

    flashcardsSection.style.display = "none";
    quizSection.style.display = "none";
    matchingSection.style.display = "none";

    flashcardsButton.classList.remove("active");
    quizButton.classList.remove("active");
    matchingButton.classList.remove("active");

    if (activity === "flashcards") {

        flashcardsSection.style.display = "block";
        flashcardsButton.classList.add("active");

    }

    if (activity === "quiz") {

        quizSection.style.display = "block";
        quizButton.classList.add("active");

    }

    if (activity === "matching") {

        matchingSection.style.display = "block";
        matchingButton.classList.add("active");

    }

}

flashcardsButton.addEventListener("click", function () {
    showActivity("flashcards");
});

quizButton.addEventListener("click", function () {
    showActivity("quiz");
});

matchingButton.addEventListener("click", function () {
    showActivity("matching");
});

showActivity("flashcards");