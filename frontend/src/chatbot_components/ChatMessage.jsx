import React from 'react'
import Chatboticon from './Chatboticon'
function ChatMessage({chat}) {
  return (
    !chat.hideInChat && (
    <div className={`message ${chat.role === "model"?'bot':'user'}-message ${chat.isError ? 'error' : ''}`}>
    {chat.role === "model" && <Chatboticon/>}
    <p className="message-text">
      {chat.text}
    </p>
  </div>
    )
  );
};

export default ChatMessage