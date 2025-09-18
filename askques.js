import { GoogleGenAI } from "@google/genai";
import { response } from "express";

const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

/**
 * Generates an interview question using the Gemini API.
 * @param {string} prompt The prompt to send to the model.
 * @returns {Promise<string>} The generated text content.
 */
async function runPrompt(prompt) {
  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ text: prompt }],
    });

    const responseFormat = result.candidates[0].content.parts[0].text;

    // Replace asterisks with a numbered list
    let counter = 1;
    let formattedResponse = responseFormat.replace(
      /^\s*\*/gm,
      () => ` ${counter++}.`
    );

    // Remove any remaining asterisks from the text
    formattedResponse = formattedResponse.replace(/\*/g, "");
    console.log(formattedResponse);
    return formattedResponse;
  } catch (error) {
    console.error("Error generating prompt from Gemini:", error);
    throw new Error("Failed to generate interview question.");
  }
}

export default runPrompt;
