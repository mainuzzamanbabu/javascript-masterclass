import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini AI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-3-flash-preview';

export const askGemini = async (prompt: string, context: string): Promise<string> => {
  try {
    const fullPrompt = `
      You are an expert JavaScript instructor teaching a class.
      Context (Current Slide Content): ${context}
      
      User Question: ${prompt}
      
      Provide a clear, concise, and encouraging answer suitable for students. 
      Use markdown for code blocks if necessary.
    `;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: fullPrompt,
    });

    return response.text || "I couldn't generate a response. Please check your API key.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I encountered an error while contacting the AI tutor.";
  }
};

export const generateQuiz = async (topic: string): Promise<any> => {
  try {
    const prompt = `Generate 3 multiple-choice questions about "${topic}" in JavaScript.`;
    
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { 
                type: Type.INTEGER, 
                description: "The index (0-based) of the correct answer in the options array" 
              }
            },
            required: ["question", "options", "correctAnswer"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text");
    return JSON.parse(text);

  } catch (error) {
    console.error("Gemini Quiz Error:", error);
    return [];
  }
};

export const explainCode = async (code: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: `Explain what this JavaScript code does step-by-step for a beginner student:\n\n\`\`\`javascript\n${code}\n\`\`\``,
    });
    return response.text || "Could not explain code.";
  } catch (error) {
    return "Error explaining code.";
  }
};