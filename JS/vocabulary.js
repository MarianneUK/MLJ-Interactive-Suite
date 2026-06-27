const words = [
    {
        word: "Generous",
        definition: "Kind and willing to give or share.",
        level: "B1 Vocabulary"
    },
    {
        word: "Greedy",
        definition: "Wanting more money, food or power than you need.",
        level: "B1 Vocabulary"
    },
    {
        word: "Fairness",
        definition: "The quality of treating people equally and in a reasonable way.",
        level: "B2 Vocabulary"
    },
    {
        word: "Honest",
        definition: "Always telling the truth.",
        level: "A2 Vocabulary"
    },
    {
        word: "Brave",
        definition: "Showing courage in difficult situations.",
        level: "B1 Vocabulary"
    },
    {
        word: "Patient",
        definition: "Able to wait calmly without getting angry.",
        level: "B1 Vocabulary"
    }
];

let previousIndex = -1;
const wordElement = document.getElementById("word");
const definitionElement = document.getElementById("definition");
const levelElement = document.getElementById("level");
const button = document.getElementById("nextWord");

button.addEventListener("click", function () {
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