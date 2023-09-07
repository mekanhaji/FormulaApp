import React, { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./components/input/Input";
import { Messages } from "./components/messages/Messages";
import { Navbar } from "./components/navbar/Navbar";
import { Help } from "./components/help/Help";
import { searchFormulaByName, createMsg } from "./utils/search";

function App() {
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState([]);

  function pushMessage(msg) {
    setMessages((prev) => [msg, ...prev]);
  }
  useEffect(
    () => setChat([{ text: <Help pushMsg={pushMessage} />, sender: "bot" }]),
    []
  );
  useEffect(() => {
    const req = messages.at(0);
    if (req) {
      const msg = req.text;
      setChat((prev) => [req, ...prev]);
      if (msg === "help") {
        setChat((prev) => [
          { text: <Help pushMsg={pushMessage} />, sender: "bot" },
          ...prev,
        ]);
      } else {
        let res = `${req.text} Not Found ¯_(ツ)_/¯`;
        const result = searchFormulaByName(req.text);
        if (result) {
          res = createMsg(result);
        }
        setTimeout(
          () => setChat((prev) => [{ text: res, sender: "bot" }, ...prev]),
          500
        );
      }
    }
  }, [messages]);
  return (
    <>
      <div className="chat-app">
        <div className="chat-container">
          <Navbar />
          <Messages messages={chat} />
          <Input pushMessage={pushMessage} />
        </div>
      </div>
    </>
  );
}

export default App;
