let words = [];
let previousIndex = -1;
let wordDeck = [];

const wordElement = document.getElementById("word");
const definitionElement = document.getElementById("definition");
const levelElement = document.getElementById("level");
const button = document.getElementById("nextWord");
const pronunciationElement = document.getElementById("pronunciation");
const wordMetaElement = document.getElementById("wordMeta");
const exampleElement = document.getElementById("example");
const synonymsElement = document.getElementById("synonyms");
const antonymsElement = document.getElementById("antonyms");
const topicSelect = document.getElementById("topicSelect");
const card = document.querySelector(".card");

function resetWordDeck() {
    wordDeck = [...words].sort(() => Math.random() - 0.5);
}

function loadVocabulary(topic) {
    fetch(`data/vocabulary/${topic}.json`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            words = data.entries;

            resetWordDeck();
            resetQuizDeck();

            previousIndex = 0;
            displayWord(words[previousIndex]);

            wordsViewed++;
            updateStatistics();

            generateQuiz();
        });
}

function loadTopics() {
    fetch("data/vocabulary/index.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (topics) {
            topicSelect.innerHTML = "";

            topics.forEach(function (topic) {
                const option = document.createElement("option");

                option.value = topic.id;
                option.textContent = topic.name;

                topicSelect.appendChild(option);
            });

            loadVocabulary(topicSelect.value);
        });
}

loadTopics();

topicSelect.addEventListener("change", function () {
    loadVocabulary(topicSelect.value);
});

button.addEventListener("click", function () {

    card.classList.add("fade");

    setTimeout(function () {

        if (wordDeck.length === 0) {
            resetWordDeck();
        }

        const randomWord = wordDeck.pop();

        displayWord(randomWord);

        wordsViewed++;
        updateStatistics();

        card.classList.remove("fade");

    }, 250);
});