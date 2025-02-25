# Gemini AI Chatbot

A modern React application that integrates with Google's Gemini 2.0 Flash AI model to create an interactive chatbot experience. This project demonstrates how to build a clean, responsive UI with Tailwind CSS while leveraging the power of Google's generative AI.

![Gemini AI Chatbot Screenshot](https://acko-cms.ackoassets.com/Google_Gemini_era_1_8e90e3f703.jpg)

## Features

- 💬 Real-time conversations with Google's Gemini 2.0 Flash AI
- 🎨 Clean, responsive UI built with Tailwind CSS
- ⚡ Fast and efficient performance
- 🔄 Message history with chat bubble interface
- 📱 Mobile-friendly design
- 🚀 Easy to extend and customize

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Google AI API key

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gemini-ai-chatbot.git
   cd gemini-ai-chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your Google AI API key:
   ```
   REACT_APP_GOOGLE_AI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── Ai/
│   └── AskAi.js       # Google Generative AI client
├── components/        # Optional component directory
├── App.js             # Main application component
├── index.js           # React entry point
└── ...
```

## Configuration

The Gemini AI client can be configured by modifying the `AskAi.js` file. You can adjust parameters such as:

- `temperature` (0.0-1.0): Controls randomness in responses
- `topP` (0.0-1.0): Controls diversity via nucleus sampling
- `topK` (1-40): Controls diversity via vocabulary restriction
- `maxOutputTokens`: Maximum length of generated responses

## Usage

1. Type your message in the input field
2. Press "Send" or hit Enter
3. Wait for the AI to generate a response
4. Continue the conversation as needed

## Customization

### Styling

This project uses Tailwind CSS for styling. To customize the appearance:

1. Modify the Tailwind configuration in `tailwind.config.js`
2. Update class names in the component files

### AI Model

To use a different Gemini model:

1. Open `Ai/AskAi.js`
2. Change the model parameter:
   ```javascript
   model: "gemini-2.0-flash" // Change to another model
   ```

## Deployment

This application can be deployed to platforms like Vercel, Netlify, or GitHub Pages.

Example deployment with Vercel:

```bash
npm install -g vercel
vercel
```

## Security Considerations

- The API key should never be exposed in client-side code in a production environment
- Consider implementing a backend proxy to secure your API key
- Set appropriate CORS and request rate limiting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google for providing the Generative AI API
- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - satyamranatc@gmail.com

Project Link: [https://github.com/satyamranatc/Gemini-AI-Chatbot](https://github.com/satyamranatc/Gemini-AI-Chatbot)