import React, { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./components/input/Input";
import { Messages } from "./components/messages/Messages";
import { Navbar } from "./components/navbar/Navbar";
import { Help } from "./components/help/Help";

function App() {
    const [messages, setMessages] = useState([
        { text: <Help />, sender: "bot" },
    ]);
    // const [theme, setTheme] = useState("dark");
    function pushMessage(msg) {
        const copy = messages;
        setMessages([...msg, ...copy]);
    }

    return (
        <>
            <div className="chat-app">
                <div className="chat-container">
                    <Navbar />
                    <Messages messages={messages} />
                    <Input pushMessage={pushMessage} />
                </div>
            </div>
        </>
    );
}

export default App;