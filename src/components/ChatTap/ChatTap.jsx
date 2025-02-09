import classes from "./ChatTap.module.css";
import { TapHome, TapMessage, TapNews } from "../../assets/svg/svg";

const ChatTap = ({ tap, setTap }) => {
  return (
    <div className={classes["chat-tap-con"]}>
      <button
        className={`${classes["tap-btn"]} ${
          tap === "home" && classes["active"]
        }`}
        onClick={() => setTap("home")}
      >
        <TapHome />
        <p>Home</p>
      </button>

      <button
        className={`${classes["tap-btn"]} ${
          tap === "message" && classes["active"]
        }`}
        onClick={() => setTap("message")}
      >
        <TapMessage />
        <p>Messages</p>
      </button>

      <button
        className={`${classes["tap-btn"]} ${
          tap === "news" && classes["active"]
        }`}
        onClick={() => setTap("news")}
      >
        <TapNews />
        <p>News</p>
      </button>
    </div>
  );
};

export default ChatTap;
