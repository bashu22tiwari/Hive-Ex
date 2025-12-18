import { GoogleGenAI, Type, Schema } from "@google/genai";
import { JobProfile } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const jobProfileSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "The professional standardized job title." },
    description: { type: Type.STRING, description: "A high-end, professional job description (max 3 sentences)." },
    competencies: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING },
      description: "List of top 5 key technical competencies."
    },
    estimatedSalaryRange: { type: Type.STRING, description: "Estimated annual salary range in USD (e.g., $120k - $150k)." },
    seniorityLevel: { type: Type.STRING, description: "Suggested seniority level (e.g., Senior, Lead, Principal)." }
  },
  required: ["title", "description", "competencies", "estimatedSalaryRange", "seniorityLevel"]
};

export const generateJobProfile = async (role: string): Promise<JobProfile> => {
  try {
    const model = "gemini-3-flash-preview";
    const prompt = `Generate a premium job profile for a candidate with the role: "${role}". 
    The tone should be corporate, high-end, and suitable for a top-tier staffing agency.`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: jobProfileSchema,
        systemInstruction: "You are an expert technical recruiter for a premium staffing agency called Hive Ex. You provide concise, high-value insights.",
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as JobProfile;
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw error;
  }
};