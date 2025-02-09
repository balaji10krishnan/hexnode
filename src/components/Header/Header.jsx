import { useState, useEffect } from "react";
import { Close, Logo, Menu } from "../../assets/svg/svg";
import classes from "./Header.module.css";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideMenu, setIsSideMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${isScrolled || isSideMenu ? classes["scrolled"] : ""} ${
          classes["header-bg"]
        }`}
      >
        <header className={`container ${classes["header"]}`}>
          <a className={`${classes["logo"]}`}>
            <Logo
              fill={
                isScrolled || isSideMenu
                  ? "var(--clr-black)"
                  : "var(--clr-white)"
              }
            />
          </a>
          <div className={`${classes["menu"]}`}>
            <ul className={`${classes["menu-list"]}`}>
              <li className={` f-m ${classes["menu-item"]}`}>
                <a href="">Why Hexnode</a>
              </li>
              <li className={` f-m ${classes["menu-item"]}`}>
                <a href="">Features</a>
              </li>
              <li className={` f-m ${classes["menu-item"]}`}>
                <a href="">Platforms</a>
              </li>
              <li className={` f-m ${classes["menu-item"]}`}>
                <a href="">Customers</a>
              </li>
            </ul>
            <div className={`${classes["trail-plan"]}`}>
              <button className={`f-m f-b btn-red ${classes["trail-btn"]}`}>
                14 days free trail
              </button>
            </div>
          </div>
          <div
            className={`${classes["menu-icon"]}`}
            onClick={() => {
              setIsSideMenu((pre) => !pre);
              if (isSideMenu) {
                document.body.style.overflow = "auto";
              } else {
                document.body.style.overflow = "hidden";
              }
            }}
          >
            {isSideMenu ? (
              <Close fill={"var(--clr-black)"} stroke={"var(--clr-black)"} />
            ) : (
              <Menu
                fill={
                  isScrolled || isSideMenu
                    ? "var(--clr-black)"
                    : "var(--clr-white)"
                }
                stroke={
                  isScrolled || isSideMenu
                    ? "var(--clr-black)"
                    : "var(--clr-white)"
                }
              />
            )}
          </div>
        </header>
        <div
          className={`${classes["side-menu"]} ${
            isSideMenu ? classes["active"] : ""
          }`}
        >
          <div className={`${classes["side-bar"]}`}>
            <div className={`${classes["side-menu-item"]}`}></div>
            <div className={`${classes["side-menu-item"]}`}>
              <a href="">Why Hexnode</a>
            </div>
            <div className={`${classes["side-menu-item"]}`}>
              <a href="">Features</a>
            </div>
            <div className={`${classes["side-menu-item"]}`}>
              <a href="">Platforms</a>
            </div>
            <div className={`${classes["side-menu-item"]}`}>
              <a href="">Customers</a>
            </div>
            <div className={`${classes["side-menu-item"]}`}>
              <button className={`f-m f-b btn-red ${classes["trail-btn"]}`}>
                14 days free trail
              </button>
              <a href="">Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
