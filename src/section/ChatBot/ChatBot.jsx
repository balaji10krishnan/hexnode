import { useState } from "react";
import { Chat1, DownArrow } from "../../assets/svg/svg";
import classes from "./ChatBot.module.css";
import ChatContainer from "../../components/ChatContainer/ChatContainer";

const ChatBot = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={[
          classes["chat-bot-container"],
          toggle && classes["active"],
        ].join(" ")}
        onClick={() => setToggle((prev) => !prev)}
      >
        {!toggle ? <Chat1 fill={"#FFFFFF"} /> : <DownArrow />}
      </div>
      {toggle && <ChatContainer active={toggle} />}
    </>
  );
};

export default ChatBot;
