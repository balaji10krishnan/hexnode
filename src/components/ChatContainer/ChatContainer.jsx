import { useState } from "react";
import ChatTap from "../ChatTap/ChatTap";
import classes from "./ChatContainer.module.css";
import HomeTap from "../HomeTap/HomeTap";
import MessageTap from "../MessageTap/MessageTap";
import NewsTap from "../NewsTap/NewsTap";

const ChatContainer = ({ active }) => {
  const [activeTap, setActiveTap] = useState("home");
  return (
    <div
      className={`${classes["chat-con"]} ${active ? classes["active"] : ""}`}
    >
      <div className={`${classes["chat-tap-container"]} ${classes[activeTap]}`}>
        {activeTap === "home" && <HomeTap />}
        {activeTap === "message" && <MessageTap />}
        {activeTap === "news" && <NewsTap />}
      </div>
      <ChatTap tap={activeTap} setTap={setActiveTap} />
    </div>
  );
};

export default ChatContainer;
