
import { GoogleGenAI } from "@google/genai";

export async function generateStoryTitle(storyText: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    You are an expert literary editor and copywriter. 
    Analyze the provided story or text and generate a single, powerful, and creative title.
    Rules:
    1. Return ONLY the title string.
    2. Do NOT include any introductory text like "The title is:".
    3. Do NOT include quotes in your response (the UI will handle that).
    4. Keep it punchy, evocative, and relevant to the themes of the text.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: storyText,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text?.trim() || "Untitled Narrative";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate title. Please try again.");
  }
}
