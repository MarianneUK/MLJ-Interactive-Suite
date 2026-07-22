const flashcardsButton = document.getElementById("flashcardsButton");
const quizButton = document.getElementById("quizButton");
const matchingButton = document.getElementById("matchingButton");

const flashcardsSection = document.getElementById("flashcardsSection");
const quizSection = document.getElementById("quizSection");
const matchingSection = document.getElementById("matchingSection");

function showActivity(activity) {

    localStorage.setItem("selectedActivity", activity);

    flashcardsSection.style.display = "none";
    quizSection.style.display = "none";
    matchingSection.style.display = "none";

    flashcardsSection.classList.remove("visible");
    quizSection.classList.remove("visible");
    matchingSection.classList.remove("visible");

    flashcardsButton.classList.remove("active");
    quizButton.classList.remove("active");
    matchingButton.classList.remove("active");

    let selectedSection;

    if (activity === "flashcards") {
        selectedSection = flashcardsSection;
        flashcardsButton.classList.add("active");
    }

    if (activity === "quiz") {
        selectedSection = quizSection;
        quizButton.classList.add("active");
    }

    if (activity === "matching") {
        selectedSection = matchingSection;
        matchingButton.classList.add("active");
    }

    selectedSection.style.display = "block";

    // Force browser repaint
    selectedSection.offsetHeight;

    selectedSection.classList.add("visible");
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

const savedActivity =
    localStorage.getItem("selectedActivity") || "flashcards";

showActivity(savedActivity);