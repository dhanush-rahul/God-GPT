import React, {useState, useEffect} from 'react';
import ChatGPT from '../components/ChatGPT';
import Anthropic from '../components/Anthropic';
import Gemini from '../components/Gemini';
import '../styles/Dashboard.css'

function Dashboard() {
    const [inputText, setInputText] = useState('');
    const [sentText, setSentText] = useState('');

    const handleInputChange = (event) =>{
        setInputText(event.target.value);
    };

    const handleSend = () => {
        setSentText(inputText);
        setInputText('');
    }
    return (
        <div className="dashboard-container">
            <div className="response-box">
                <h2>Chat with GPT</h2>
                <div className="response-content">
                    <ChatGPT inputText={ sentText }/>
                </div>
            </div>
            <div className="response-box">
                <h2>Chat with Claude</h2>
                <div className="response-content">
                    <Anthropic inputText={ sentText }/>
                </div>
            </div>
            <div className="response-box">
                <h2>Chat with Gemini</h2>
                <div className="response-content">
                    <Gemini inputText={ sentText }/>
                </div>
            </div>
            <div className="input-container">
                <input
                    type="text" 
                    placeholder="Type your message here..." 
                    className="bottom-input" 
                    value={inputText}
                    onChange={handleInputChange}
                    />
                <button className="send-button" onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default Dashboard;