import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(
    {
        apiKey: import.meta.env.VITE_GEMINI_API
    });

export default async function getGuide(promptValues) {

    if(promptValues.name == "" || promptValues.experience == "" || promptValues.currentRole == "" || promptValues.industry == "" || promptValues.challenges == "" || promptValues.goals == "")
        return "Enter all the fields";

    const prompt = `
      Provide career guidance for a professional with the following details:
      - Name: ${promptValues.name}
      - Experience: ${promptValues.experience}
      - Current Role: ${promptValues.currentRole}
      - Industry: ${promptValues.industry}
      - Challenges: ${promptValues.challenges}
      - Goals: ${promptValues.goals}
      
      Based on this information, suggest:
      1. Short-term actionable steps they can take.
      2. Long-term career growth strategies.
      3. Relevant skills or certifications to pursue.
      4. Potential alternative career paths (if applicable).
      
      Keep the advice personalized, practical, and encouraging.Keep the response within 200 words start with hello {name} and keep it simple and precise
      
        `;

    try{
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        role: "career guide",
        contents: [
            {
                role: "user",
                parts: [{ text: prompt }]
            }
        ]
    });
    return (response.text ?? "");
}
    catch(error)
    {
        if(error.code == 503)
            return "Pls Try Again Since Server is overloaded"
        else
            return(error.message??"")
    }
}
