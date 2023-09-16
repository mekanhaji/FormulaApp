import "./Main.css";
import { Navbar } from "../navbar/Navbar.js";
import { Input } from "../input/Input.js";
import { Messages } from "../messages/Messages.js";

const Main = () => {
  return (
    <main className="main">
      <Navbar />
      <Messages messages={[{ sender: "bot", text: "Hello" },{ sender: "user", text: "Hello" }]} />
      <Input />
    </main>
  );
};

export default Main;
