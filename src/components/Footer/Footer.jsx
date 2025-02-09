import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className="">
      <div className={`${classes["footer-dark"]}`}>
        <div className={`${classes["footer-msg"]} container container-padding`}>
          <p className={`${classes["footer-text"]}`}>
            Get Hexnode UEM and start securing your endpoints
          </p>
          <button className={`btn-red ${classes["footer-btn"]}`}>
            TRY HEXNODE FOR FREE
          </button>
        </div>
      </div>
      <div className={`${classes["footer-light"]}`}>
        <div className={`${classes["t-c"]} container`}>
          <div className={`${classes["foot-link"]}`}>
            <a href="https://www.hexnode.com/legal/terms-of-use/">
              Terms of Use
            </a>
            <span className={`${classes["foot-dash"]}`}></span>
            <a href="https://www.hexnode.com/legal/privacy-policy/">Privacy</a>
            <span className={`${classes["foot-dash"]}`}></span>

            <a href="https://www.hexnode.com/legal/cookies-policy/">Cookies</a>
          </div>
          <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
