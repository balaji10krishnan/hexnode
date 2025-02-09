import { Logo } from "../../assets/svg/svg";
import classes from "./HomeTap.module.css";
const HomeTap = () => {
  return (
    <div className={`${classes["home-container"]}`}>
      <div className={`${classes["home-welcome"]}`}>
        <div className={`${classes["home-logo"]}`}>
          <Logo fill={"var(--clr-white)"} />
        </div>
        <div className={`${classes["wel-msg"]}`}>
          <p>Good Day !</p>
          <p>How can we help?</p>
        </div>
      </div>
      <div className={`${classes["home-msg"]}`}>
        <p className={`${classes["txt-dark"]}`}>Ask a question</p>
        <p className={`${classes["txt-light"]}`}> AI Agent and team can help</p>
      </div>{" "}
      <div className={`${classes["home-msg"]}`}>
        <p className={`${classes["txt-dark"]}`}>What is Apple Lockdown Mode?</p>
        <p className={`${classes["txt-light"]}`}>
          {" "}
          Apple unveiled its most restrictive security feature yet, Apple
          Lockdown Mode. What is it? Who is it meant for? Read all about it
          here.
        </p>
      </div>{" "}
      <div className={`${classes["home-msg"]}`}>
        <p className={`${classes["txt-dark"]}`}>
          Introducing Hexnode Gateway for Windows!
        </p>
        <p className={`${classes["txt-light"]}`}>
          {" "}
          Hexnode Gateway app for Windows streamlines device migration, making
          it easier than ever to move your Windows devices to Hexnode UEM with
          minimal disruption.
        </p>
      </div>{" "}
      <div className={`${classes["home-msg"]}`}>
        <p className={`${classes["txt-dark"]}`}>
          Is your business ready for remote work?
        </p>
        <p className={`${classes["txt-light"]}`}>
          {" "}
          Remote work is here to stay, and so are the vulnerabilities it brings
          in. Does your company have the tools to drive them out? Take this
          4-minute quiz to find out.
        </p>
        <p className={`${classes["home-btn"]}`}>Take a quiz</p>
      </div>{" "}
      <div className={`${classes["home-msg"]}`}>
        <p className={`${classes["txt-dark"]}`}>
          Unified Endpoint Management Help | Hexnode
        </p>
        <p className={`${classes["txt-light"]}`}>
          {" "}
          Dive through our knowledge base to explore Hexnode UEMs features in
          detail.
        </p>
      </div>{" "}
    </div>
  );
};

export default HomeTap;
