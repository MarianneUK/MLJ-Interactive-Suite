const matchingGameElement = document.getElementById("matchingGame");
const newMatchingGameButton = document.getElementById("newMatchingGame");

let selectedWordCard = null;
let selectedDefinitionCard = null;

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function generateMatchingGame() {
    matchingGameElement.innerHTML = "";

    selectedWordCard = null;
    selectedDefinitionCard = null;

    if (words.length < 4) {
        matchingGameElement.innerHTML = "<p>Not enough words to create a matching game.</p>";
        return;
    }

    const selectedWords = shuffle(words).slice(0, 4);
    const shuffledDefinitions = shuffle(selectedWords);

    let html = `
        <div class="matching-columns">

            <div class="matching-column">
                <h3>Words</h3>
    `;

    selectedWords.forEach(function (word) {
        html += `
            <div class="matching-item matching-word" data-id="${word.id}">
                ${word.word}
            </div>
        `;
    });

    html += `
            </div>

            <div class="matching-column">
                <h3>Definitions</h3>
    `;

    shuffledDefinitions.forEach(function (word) {
        html += `
            <div class="matching-item matching-definition" data-id="${word.id}">
                ${word.definition}
            </div>
        `;
    });

    html += `
            </div>

        </div>

        <p id="matchingFeedback"></p>
    `;

    matchingGameElement.innerHTML = html;

    addMatchingClickEvents();
}

function addMatchingClickEvents() {
    const wordCards = document.querySelectorAll(".matching-word");
    const definitionCards = document.querySelectorAll(".matching-definition");

    wordCards.forEach(function (card) {
        card.addEventListener("click", function () {
            wordCards.forEach(function (wordCard) {
                wordCard.classList.remove("selected");
            });

            selectedWordCard = card;
            card.classList.add("selected");

            checkMatch();
        });
    });

    definitionCards.forEach(function (card) {
        card.addEventListener("click", function () {
            definitionCards.forEach(function (definitionCard) {
                definitionCard.classList.remove("selected");
            });

            selectedDefinitionCard = card;
            card.classList.add("selected");

            checkMatch();
        });
    });
}

function checkMatch() {
    if (!selectedWordCard || !selectedDefinitionCard) {
        return;
    }

    const feedback = document.getElementById("matchingFeedback");

    if (selectedWordCard.dataset.id === selectedDefinitionCard.dataset.id) {
        selectedWordCard.classList.add("matched");
        selectedDefinitionCard.classList.add("matched");

        selectedWordCard.classList.remove("selected");
        selectedDefinitionCard.classList.remove("selected");

        feedback.textContent = "Correct match!";

        selectedWordCard = null;
        selectedDefinitionCard = null;
    } else {
        selectedWordCard.classList.add("wrong");
        selectedDefinitionCard.classList.add("wrong");

        feedback.textContent = "Not quite. Try again.";

        setTimeout(function () {
            selectedWordCard.classList.remove("selected", "wrong");
            selectedDefinitionCard.classList.remove("selected", "wrong");

            selectedWordCard = null;
            selectedDefinitionCard = null;
        }, 700);
    }
}

newMatchingGameButton.addEventListener("click", generateMatchingGame);