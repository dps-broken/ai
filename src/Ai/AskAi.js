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
      history: [
      ],
    });
  
   async function AskAi(Prompt)
   {
    const result = await chatSession.sendMessage(Prompt);
    // console.log(result.response.text());
    return result.response.text();
   }
   return AskAi;
  }
  
  let AskAi = await run();
  export default AskAi;