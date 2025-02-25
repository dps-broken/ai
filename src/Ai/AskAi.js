import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyDZpHhq42yIio-FwQH32hs_5EK07tqTW68";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  async function AskAi(Prompt) {
    const result = await chatSession.sendMessage(Prompt);
    return result.response.text();
  }

  return AskAi;
}

let AskAiPromise = run(); // Store the promise instead of using top-level await

export default async function AskAi(Prompt) {
  const AskAi = await AskAiPromise; // Await inside the function, not at the top level
  return AskAi(Prompt);
}
