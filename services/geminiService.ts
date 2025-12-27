
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a professional portrait based on a source image using Gemini.
 */
export const generateProfessionalPortrait = async (base64Image: string): Promise<string | null> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key topilmadi");
    }

    const ai = new GoogleGenAI({ apiKey });

    // We use gemini-2.5-flash-image which is the standard for image generation/editing tasks.
    const prompt = `
      Create a realistic and professional studio portrait based on the attached image.
      
      Requirements:
      1. EXACT FACE PRESERVATION: Keep the person's exact facial structure, facial expression, features, and skin tone. The person must be 100% recognizable.
      2. PROFESSIONAL CLOTHING:
         - If the person is male, dress them in a high-quality professional outfit: A dark navy blue classic suit, white shirt, and a simple elegant tie.
         - If the person is female, dress them in a high-quality professional outfit: A dark-colored classic blazer and a crisp white blouse.
      3. BACKGROUND: Use a neutral, clean, and professional studio background (light gray or white).
      4. LIGHTING: Use soft, professional studio lighting with natural-looking shadows.
      5. QUALITY: High resolution, realistic, sharp, and clear. No cartoon, fantasy, filter, or artificial effects.
      6. USE CASE: The final result must be suitable for official documents, resumes, and professional profile photos (LinkedIn).
      
      Output ONLY the image.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: 'image/png',
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "3:4"
        }
      }
    });

    // Extract the image from candidates
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const resultBase64 = part.inlineData.data;
          return `data:image/png;base64,${resultBase64}`;
        }
      }
    }

    return null;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
