import { GoogleGenAI } from "@google/genai";
import { response } from "express";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

/**
 * Generates a roadmap for a given role using the Gemini model.
 * @param {string} role The role to generate a roadmap for.
 * @returns {Promise<string>} The generated roadmap in Mermaid code format.
 */
async function generateRoadmap(role) {
  const prompt = `Generate a comprehensive roadmap for a web developer role. The output must be only a Mermaid code block for a flowchart (graph TD). Do not include any other text or explanation outside the code block. The roadmap should cover key skills, tools, and learning paths.`;

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  let responseFormat = result.candidates[0].content.parts[0].text;

  // let textRes = result.text();
  // console.log("Raw AI Response:", textRes);

  // // Clean the response to ensure only the Mermaid code is returned.
  responseFormat = responseFormat.replace(/```mermaid\n|```/g, "").trim();
  console.log("Cleaned Mermaid Code:", responseFormat);

  return responseFormat;
}

export default generateRoadmap;
