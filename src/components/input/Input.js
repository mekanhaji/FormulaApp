import React, { useEffect, useState } from "react";
import { searchFormulaByName } from "../../utils/search";
import { Help } from "../help/Help";
import "./Input.css";

export const Input = ({ pushMessage }) => {
    const [newMessage, setNewMessage] = useState("");
    // useEffect(()=> {

    // },[])
    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };
    function Msg({ data }) {
        return (
            <div>
                <h2>{data.name}</h2>
                <h3>{data.formula}</h3>
                <p>{data.description}</p>
            </div>
        );
    }
    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            const data = searchFormulaByName(newMessage);
            let res = "not found";
            if (data) {
                res = <Msg data={data} />;
            }
            pushMessage([
                { text: res, sender: "other" },
                { text: newMessage, sender: "user" },
            ]);
            console.log(newMessage);
            // replay(newMessage)
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
