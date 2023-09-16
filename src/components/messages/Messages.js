import React from "react";
import "./Messages.css";

export const Messages = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.sender === "user" ? "user-box" : "bot-box"
          } `}
        >
          <p
            className={`message-text ${
              message.sender === "user" ? "user-message" : "bot-message"
            }`}
          >
            {message.text}
          </p>
        </div>
      ))}
    </div>
  );
};
