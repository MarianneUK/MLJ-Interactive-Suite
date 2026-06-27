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

function displayWord(wordData) {
    wordElement.textContent = wordData.word;
    pronunciationElement.textContent = wordData.pronunciation;
    wordMetaElement.textContent = `${wordData.partOfSpeech} · ${wordData.level} · ${wordData.topic}`;
    definitionElement.textContent = wordData.definition;
    exampleElement.textContent = wordData.example;
    synonymsElement.textContent = wordData.synonyms.join(", ");
    antonymsElement.textContent = wordData.antonyms.join(", ");
}

fetch("data/vocabulary/values.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        words = data;
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

        document.querySelector(".card").classList.remove("fade");
    }, 300);
});