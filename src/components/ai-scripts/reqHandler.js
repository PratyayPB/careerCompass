import express from "express";
import generateRoadmap from "./aiModel.js";

const router = express.Router();

router.post("/api/roadmap", async (req, res) => {
  try {
    const { role } = req.body;
    if (!role) {
      return res.status(400).json({ error: "Role is required" });
    }
    const mermaidCode = await generateRoadmap(role);

    res.json({ mermaidCode });
  } catch (error) {
    console.error("Error generating roadmap:", error);
    res.status(500).json({ error: "Failed to generate roadmap." });
  }
});

let roadmapRouter = router;
export default roadmapRouter;
