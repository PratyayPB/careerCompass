import { displayText, highlightWord } from "./transcriptGen.js";

/**
 * Uses the browser's Web Speech API to speak the given text.
 * @param {string} text The text to be spoken.
 * @param {HTMLElement} transcriptContainer The element to display the transcript.
 */
function generateSpeech(text, transcriptContainer) {
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  displayText(text, transcriptContainer);

  let speech = new SpeechSynthesisUtterance();
  speech.text = text;

  let wordIndex = 0;
  speech.onboundary = (event) => {
    if (event.name === "word") {
      highlightWord(wordIndex);
      wordIndex++;
    }
  };

  speech.onend = () => {
    // Remove highlight when speech ends
    highlightWord(-1);
  };

  window.speechSynthesis.speak(speech);
}

export default generateSpeech;
