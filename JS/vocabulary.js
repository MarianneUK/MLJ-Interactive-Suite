let previousIndex = -1;
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

function loadVocabulary(topic) {

    fetch(`data/vocabulary/${topic}.json`)

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {

            words = data.entries;
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
    if (words.length === 0) {
    return;
}
    
    document.querySelector(".card").classList.add("fade");

    setTimeout(function () {
        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * words.length);
        } while (randomIndex === previousIndex);

        previousIndex = randomIndex;

        const randomWord = words[randomIndex];

        displayWord(randomWord);

        wordsViewed++;
        updateStatistics();

        document.querySelector(".card").classList.remove("fade");
    }, 300);
});