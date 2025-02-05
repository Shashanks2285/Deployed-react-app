import React, { useEffect } from 'react'
import Chatboticon from './Chatboticon';
import "./Chatbot.css";
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
import { companyInfo } from './comapnayInfo';

function Chat() {
  const [chatHistory, setChatHistory] = React.useState([{
    hideInChat: true,
    role: "model",
    text: companyInfo
  }]);
  const [showChatbot, setShowChatbot] = React.useState(false);
  const chatBodyRef = React.useRef(null);
  const API_URL = process.env.REACT_APP_GOOGLE_URL;
  
  const generateBotResponse = async (history) => {
    const updateHistory = (text ,isError=false) =>
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text ,isError },
      ]);
  
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contents: history }),
    };
  
    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error?.message || "Failed to generate response");
      }
  
      // console.log("API Response:", data);
  
      
      const candidate = data.candidates?.[0]; 
      if (!candidate || !candidate.content || !candidate.content.parts?.[0]?.text) {
        throw new Error("Invalid API response format");
      }
  
      const apiResponseText = candidate.content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
  
      // console.log("Extracted Text:", apiResponseText);
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(`Error: ${error.message}`,true);
    }
  };
  
  useEffect(() => {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: 'smooth'});
  },[chatHistory]);
  return (
    <div className={`container ${showChatbot ? "show-chatbot":""}`}>
      <button onClick={()=>setShowChatbot(prev=>!prev)} 
      id="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>
          <div className='chatbot-popup'>
            <div className="chat-header">
              <div className="header-info">
                <Chatboticon/>
                <h2 className="logo-text">ExoBot</h2>
              </div>
              <button className="material-symbols-rounded" onClick={()=>setShowChatbot(prev=>!prev)} >keyboard_arrow_down</button>
            </div>
            <div ref={chatBodyRef}className="chat-body"> 
              <div className="message bot-message">
                <Chatboticon/>
                <p className="message-text">
                  Hey there 👋!<br/> How can I help you today?
                </p>
              </div>
              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat}/>
              ))}
            </div>
            <div className="chat-footer">
              <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
            </div>
          </div>
        </div>
  )
}

export default Chat