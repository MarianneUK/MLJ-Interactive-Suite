function displayWord(wordData) {
    wordElement.textContent = wordData.word;
    pronunciationElement.textContent = wordData.pronunciation;
    wordMetaElement.textContent = `${wordData.partOfSpeech} · ${wordData.level} · ${wordData.topic}`;
    definitionElement.textContent = wordData.definition;
    exampleElement.textContent = wordData.example;
    synonymsElement.textContent = wordData.synonyms.join(", ");
    antonymsElement.textContent = wordData.antonyms.join(", ");
}