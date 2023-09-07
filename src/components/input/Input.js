import React, { useState } from "react";
import "./Input.css";

export const Input = ({ pushMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      pushMessage({ text: newMessage, sender: "user" });
      setNewMessage("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={newMessage}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};
