import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
function ChatGPT({inputText}){

  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const timeoutRef = useRef(null);

  useEffect(()=>{
    if(inputText){
      setPrompt(inputText);
    }
  },[inputText]);
  useEffect(() => {
    if(prompt)
    {
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
    }
  },[prompt]);

  return (
    <div>
      <p>{prompt}</p>
        <p>{response}</p>
        </div>
  );
}

export default ChatGPT;