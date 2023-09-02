import React from "react";
import "./Messages.css";

export const Messages = ({ messages }) => {
    return (
        <div className="chat-messages">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`message ${
                        message.sender === "user"
                            ? "user-message"
                            : "bot-message"
                    }`}
                >
                    {message.text}
                </div>
            ))}
        </div>
    );
};
