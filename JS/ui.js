function displayWord(wordData) {
    wordElement.textContent = wordData.word;
    pronunciationElement.textContent = wordData.pronunciation;
    wordMetaElement.textContent = `${wordData.partOfSpeech} · ${wordData.level} · ${wordData.topic}`;
    definitionElement.textContent = wordData.definition;
    exampleElement.textContent = wordData.example;
    synonymsElement.textContent = wordData.synonyms.join(", ");
    antonymsElement.textContent = wordData.antonyms.join(", ");
}

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        event.preventDefault();

        const nextWordButton = document.getElementById("nextWord");

        if (nextWordButton) {
            nextWordButton.click();
        }
    }

    if (event.code === "Enter") {
        const newQuestionButton = document.getElementById("newQuestion");

        if (newQuestionButton) {
            newQuestionButton.click();
        }
    }
});