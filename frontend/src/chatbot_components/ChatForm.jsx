import React from 'react'

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
  const inputRef = React.useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value="";
    
    setChatHistory(history=>[...history, {role: 'user', text: userMessage}]);

    setTimeout(()=>{
      setChatHistory(history=>[...history, {role: 'model', text: "Thinking..."}]);
      generateBotResponse([...chatHistory,{role: 'user', text: `Using the details provide above, please address the query:${userMessage}`}]);
    },700);

    
  }
  return (
    <form action='#' className="chat-form" onSubmit={handleFormSubmit}>
      <input  ref={inputRef} type='text' placeholder='Type a message...' className="message-input" required/>
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  )
}

export default ChatForm