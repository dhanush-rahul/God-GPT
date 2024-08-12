import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
function ChatGPT(){

    const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const timeoutRef = useRef(null);

  const handleSend = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      try {
        const res = await axios.post('/api/chatgpt', { prompt });
        console.log(res);
        setResponse(res.data.reply);
      } catch (error) {
        console.error('Error sending prompt to server:', error.message);
        setResponse('Something went wrong. Please try again.');
      }
    }, 1000); // Debounce delay of 1 second
  };

  return (
    <div>
      <h1>Chat with GPT</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={handleSend}>Send</button>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default ChatGPT;