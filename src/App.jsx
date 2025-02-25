import React, { useState, useRef, useEffect } from 'react';
import AskAi from './Ai/AskAi';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function handleSubmit(e) {
    e.preventDefault();
    const input = inputRef.current;
    const userMessage = input.value.trim();
    
    if (!userMessage) return;
    
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    input.value = '';
    setIsLoading(true);
    
    try {
      const response = await AskAi(userMessage);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setMessages(prev => [...prev, { 
        text: "Sorry, I couldn't process your request. Please try again.", 
        isUser: false,
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#EAEAEA] flex flex-col">
      <header className="bg-[#2DAA9E] shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">Pranjal AI Chatbot</h1>
          <p className="text-[#E3D2C3] mt-1">Ask anything and get intelligent responses</p>
        </div>
      </header>
      
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-96 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-400 text-center">
              <div>
                <p>Start a conversation by typing a message below</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-3/4 rounded-lg px-4 py-2 ${
                      msg.isUser 
                        ? 'bg-[#66D2CE] text-white' 
                        : msg.isError 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-[#E3D2C3] text-gray-800'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#E3D2C3] rounded-lg px-4 py-2">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]"
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-[#2DAA9E] text-white rounded-lg px-4 py-2 font-medium hover:bg-[#66D2CE] focus:outline-none focus:ring-2 focus:ring-[#2DAA9E] disabled:opacity-50 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </main>
      
      <footer className="bg-gray-800 text-gray-300 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm">
          Developed by Pranjal Kumar Dwivedi
        </div>
      </footer>
    </div>
  );
}
