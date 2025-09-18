/**
 * Manages the display and highlighting of the transcript.
 */

let transcriptContainer;
let currentSpans = [];

/**
 * Displays the text in the transcript container, wrapping each word in a <span>.
 * @param {string} text The text to display.
 * @param {HTMLElement} container The HTML element to display the transcript in.
 */
export function displayText(text, container) {
  transcriptContainer = container;
  transcriptContainer.innerHTML = "";
  currentSpans = [];
  const words = text.split(/\s+/);
  words.forEach((word) => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    transcriptContainer.appendChild(span);
    currentSpans.push(span);
  });
}

/**
 * Highlights a word in the transcript at a given index.
 * @param {number} wordIndex The index of the word to highlight.
 */
export function highlightWord(wordIndex) {
  currentSpans.forEach((span, index) => {
    span.classList.toggle("highlight", index === wordIndex);
  });
}
