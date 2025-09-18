import "./config.js";
import express from "express";
import cors from "cors";
import path from "path";
import runPrompt from "./modules/interview_mod/askques.js";
import roadmapRouter from "./modules/roadmap_mod/reqHandler.js";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();

// Enable CORS for all routes
app.use(cors());

app.set("view engine", "ejs");

// Serve static files from the 'tts' directory
app.use("/tts", express.static(path.resolve("./tts")));
app.use("/views", express.static(path.resolve("./views")));

// Middleware to parse JSON requests
app.use(express.json()); // handles json data

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use the roadmap router
app.use(roadmapRouter);

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/index"));
});

app.get("/roadmap", (req, res) => {
  res.render(path.join(__dirname, "views/roadmaps"));
});

/**
 * API endpoint to generate an interview question and its corresponding speech audio.
 * This endpoint now also handles follow-up questions and stores conversation history.
 */

const conversationHistory = []; // store all conversation

app.post("/api/interview-question", async (req, res) => {
  try {
    // The user response will now always be text, transcribed by the browser.
    const { userResponse } = req.body;

    let prompt;

    if (!userResponse) {
      // first question
      prompt =
        "Generate one behavioral interview question for a software engineer role.";
    } else {
      // follow up question
      // adding the user response with all other conversation in order to create a model context
      conversationHistory.push({ role: "user", content: userResponse });

      // Construct the prompt including conversation history
      // The map() method creates a new array by calling a function for every element in an array.
      //The map() method does not execute the function for empty elements.
      //The map() method does not change the original array.
      prompt = `Continue the interview. Previous conversation: ${conversationHistory
        .map((msg) => `${msg.role}: ${msg.content}`)
        .join("\n")}. Generate one follow up question.`;
    }

    const questionText = await runPrompt(prompt);

    //Store the AI generated question in conversationHistory to maintain context
    conversationHistory.push({ role: "ai", content: questionText });

    // 2. Respond with the transcript
    res.json({
      transcript: questionText,
    });
  } catch (error) {
    console.error("Error in interview question route:", error);
    res.status(500).json({ error: "Failed to process interview question." });
  }
});

app.post("/api/new-interview-question", async (req, res) => {
  try {
    // Clear conversation history
    conversationHistory.length = 0;

    // Generate a new interview question
    const prompt =
      "Generate one behavioral interview question for a software engineer role.";

    //store the AI generated question in conversationHistory to maintain context
    const questionText = await runPrompt(prompt);

    conversationHistory.push({ role: "ai", content: questionText });

    // Respond with the transcript
    res.json({
      transcript: questionText,
    });
  } catch (error) {
    console.error("Error in interview question route:", error);
    res.status(500).json({ error: "Failed to process interview question." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
