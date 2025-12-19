import { GoogleGenAI, Modality } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export const profileTarget = async (targetAlias: string, targetData: string, vulnerability: string, leverage: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "CẦN QUYỀN TRUY CẬP AXE GOLD ĐỂ GIẢI MÃ TÂM LÝ.";

  try {
    const prompt = `
      You are Bobby Axelrod. I have a high-value real estate target: "${targetAlias}".
      Context: ${targetData}.
      Vulnerability: ${vulnerability}.
      Leverage Status: ${leverage}.
      
      Task:
      1. Analyze their current emotional state (Desperation, Pride, Fear).
      2. Provide a "Kill Shot" Negotiation Script: What exactly do I say to exploit their vulnerability and close the deal on my terms?
      3. Strategic Advice: What is the 'unfair advantage' I hold over them right now?
      
      Requirements:
      - Vietnamese language only.
      - Tone: Cold, tactical, dominant, professional.
      - Use financial jargon where appropriate.
      - Keep it brief and high-impact.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
    });

    return response.text || "Không thể phân tích mục tiêu.";
  } catch {
    return "LỖI KẾT NỐI TRUNG TÂM TÌNH BÁO.";
  }
};

export const analyzeMarketZone = async (zoneName: string, currentData: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "YÊU CẦU API KEY ĐỂ TRUY CẬP DỮ LIỆU THỜI GIAN THỰC.";
  try {
    const prompt = `You are Bobby Axelrod. Analyze ${zoneName} based on: ${currentData}. Vietnamese, 3 sentences.`;
    const response = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: prompt });
    return response.text || "Dữ liệu không khả dụng.";
  } catch { return "LỖI KẾT NỐI."; }
};

export const terminalCommand = async (command: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "ACCESS DENIED.";
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Terminal command: ${command}. Bobby Axelrod style response. Vietnamese.`,
      config: { systemInstruction: "You are a cold financial terminal." }
    });
    return response.text || "NO DATA.";
  } catch { return "TIMEOUT."; }
};

export const generateMastermindAudio = async (text: string): Promise<string | null> => {
  const ai = getAiClient();
  if (!ai) return null;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } },
      },
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
  } catch { return null; }
};