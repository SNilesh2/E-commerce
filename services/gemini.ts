import { GoogleGenAI, Type } from "@google/genai";

// Fixed: Strictly follow Google GenAI initialization rules.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProductDescription = async (productName: string, category: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a compelling and professional e-commerce product description for a product named "${productName}" in the "${category}" category. Keep it under 100 words and highlight features and benefits.`,
    });
    // Correctly accessing .text property
    return response.text || "Failed to generate description.";
  } catch (error) {
    console.error("Gemini error:", error);
    return "AI service currently unavailable.";
  }
};

export const analyzeReviewSentiment = async (review: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze the sentiment of this product review and provide a one-word summary (Positive, Neutral, or Negative) followed by a short reason: "${review}"`,
    });
    // Correctly accessing .text property
    return response.text || "Sentiment unknown";
  } catch (error) {
    console.error("Gemini error:", error);
    return "Analysis failed.";
  }
};

export const getSmartRecommendations = async (userHistory: string[]): Promise<string[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Based on a user's interest in: ${userHistory.join(', ')}, suggest 3 categories of products they might like.`,
      config: {
          responseMimeType: "application/json",
          responseSchema: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
          }
      }
    });
    // Correctly accessing .text property and parsing JSON
    const result = JSON.parse(response.text || '[]');
    return result;
  } catch (error) {
    return ["New Arrivals", "Best Sellers", "Clearance"];
  }
}