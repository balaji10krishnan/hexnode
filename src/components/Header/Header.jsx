import { useState, useEffect } from "react";
import { Close, Logo, Menu } from "../../assets/svg/svg";
import classes from "./Header.module.css";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollBtn, setIsScrollBtn] = useState(false);
  const [isSideMenu, setIsSideMenu] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document?.getElementById(sectionId);
    const headerHeight = 86; // Set the height of your header

    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight, // Subtract the header height
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      const blogSec = document?.getElementById("blog-sec");
      const headerHeight = 86;

      if (blogSec) {
        const blogSecPosition = blogSec.offsetTop;
        const triggerPosition = blogSecPosition - headerHeight;
        if (window.scrollY >= triggerPosition) {
          setIsScrollBtn(true);
        } else {
          setIsScrollBtn(false);
        }
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
        } ${isScrollBtn ? classes["scroll-btn-view"] : ""}`}
      >
        <header className={`container ${classes["header"]}`}>
          <a className={`${classes["logo"]}`} href="https://www.hexnode.com/">
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
                <a
                  onClick={() => {
                    scrollToSection("hex-sec");
                  }}
                >
                  Why Hexnode
                </a>
              </li>
              <li className={` f-m ${classes["menu-item"]}`}>
                <a
                  onClick={() => {
                    scrollToSection("features-sec");
                  }}
                >
                  Features
                </a>
              </li>
              <li className={` f-m ${classes["menu-item"]}`}>
                <a
                  onClick={() => {
                    scrollToSection("plat-sec");
                  }}
                >
                  Platforms
                </a>
              </li>
              <li className={` f-m ${classes["menu-item"]}`}>
                <a
                  onClick={() => {
                    scrollToSection("cus-sec");
                  }}
                >
                  Customers
                </a>
              </li>
            </ul>
            <div className={`${classes["trail-plan"]}`}>
              <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">
                <button className={`f-m f-b btn-red ${classes["trail-btn"]}`}>
                  14 days free trail
                </button>
              </a>
            </div>
          </div>
          <div className={`${classes["menu-res"]}`}>
            <div className={`${classes["test-view"]} `}>
              <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">
                <button className={`f-m f-b btn-red ${classes["scroll-btn"]}`}>
                  14 days free trail
                </button>
              </a>
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
              <a
                onClick={() => {
                  scrollToSection("hex-sec");
                }}
              >
                Why Hexnode
              </a>
            </div>
            <div className={`${classes["side-menu-item"]}`}>
              <a
                onClick={() => {
                  scrollToSection("features-sec");
                }}
              >
                Features
              </a>
            </div>
            <div className={`${classes["side-menu-item"]}`}>
              <a
                onClick={() => {
                  scrollToSection("plat-sec");
                }}
              >
                Platforms
              </a>
            </div>
            <div className={`${classes["side-menu-item"]}`}>
              <a
                onClick={() => {
                  scrollToSection("cus-sec");
                }}
              >
                Customers
              </a>
            </div>
            <div className={`${classes["side-menu-item"]}`}>
              <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">
                <button className={`f-m f-b btn-red ${classes["trail-btn"]}`}>
                  14 days free trail
                </button>
              </a>
              <a href="https://www.hexnode.com/mobile-device-management/sign-in/">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
