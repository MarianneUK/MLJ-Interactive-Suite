let previousIndex = -1;
const wordElement = document.getElementById("word");
const definitionElement = document.getElementById("definition");
const levelElement = document.getElementById("level");
const button = document.getElementById("nextWord");

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

        wordElement.textContent = randomWord.word;
        definitionElement.textContent = randomWord.definition;
        levelElement.textContent = randomWord.level;

        document.querySelector(".card").classList.remove("fade");
    }, 300);
});