const listenButton = document.getElementById("listenButton");

function speakWord() {
    const word = wordElement.textContent;

    const utterance = new SpeechSynthesisUtterance(word);

    utterance.lang = "en-GB";
    utterance.rate = 0.85;

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

if (listenButton) {
    listenButton.addEventListener("click", speakWord);
}