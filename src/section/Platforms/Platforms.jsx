import { useState } from "react";
import Heading from "../../components/Heading/Heading";
import classes from "./Platforms.module.css";
//img
import andrImg from "../../assets/png/plat-and.webp";
import iosImg from "../../assets/png/plat-ios.webp";
import imacImg from "../../assets/png/plat-imac.webp";
import winImg from "../../assets/png/plat-win.webp";
import fireImg from "../../assets/png/plat-fire.webp";
import tvImg from "../../assets/png/plat-tv.webp";
const Platforms = () => {
  const [toggleItem, setToggleItem] = useState(0);
  const handleTogle = (i) => {
    setToggleItem(i);
  };
  const platformsObj = [
    {
      label: "Android",
      text: "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities.",
      link: "Try Hexnode on your endpoints",
      img: andrImg,
    },
    {
      label: "iOS",
      text: "Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.",
      link: "Try Hexnode on your endpoints",
      img: iosImg,
    },
    {
      label: "macOS",
      text: "Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",
      link: "Try Hexnode on your endpoints",
      img: imacImg,
    },
    {
      label: "Windows",
      text: "Spearhead modern PC management in your organization with Hexnode. Set limit’s and monitor PC health and compliance remotely with Hexnode UEM.",
      link: "Try Hexnode on your endpoints",
      img: winImg,
    },
    {
      label: "tvOS",
      text: "Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",
      link: "Try Hexnode on your endpoints",
      img: tvImg,
    },
    {
      label: "FireOS",
      text: "Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.",
      link: "Try Hexnode on your endpoints",
      img: fireImg,
    },
  ];
  return (
    <section className={`${classes["platform-bg"]}`}>
      <div className={`${classes["platform"]} container container-padding`}>
        <Heading
          title={"Multi-platform Endpoint Management"}
          subTitle={
            "Devices of varying platforms? Hexnode thrives in a diverse environment."
          }
        />
        <div className={`${classes["platform-slide"]}`}>
          <div className={`${classes["platform-slide-img"]} `}>
            <div className={` ${classes["sticky"]}`}>
              {platformsObj?.map((item, i) => (
                <img
                  src={item?.img}
                  style={{ display: i == toggleItem ? "block" : "none" }}
                />
              ))}
            </div>
          </div>
          <div className={`${classes["platform-acc"]}`}>
            {platformsObj?.map((item, i) => (
              <div key={i}>
                <Accordion
                  item={item}
                  show={i == toggleItem}
                  index={i}
                  handleTogle={handleTogle}
                  toggleItem={toggleItem}
                />
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Platforms;

const Accordion = ({ item, show, index, handleTogle, toggleItem }) => {
  return (
    <div className={`${show ? classes["active"] : ""}`}>
      <div className={`${classes["acc-img"]}`}>
        <img src={item.img} />
      </div>
      <div
        className={`${classes["acc-container"]}`}
        onClick={() => {
          handleTogle(index);
        }}
        style={{
          border: toggleItem - 1 == index && "none",
        }}
      >
        <p className={`${classes["acc-title"]} f-l fw-s `}>{item?.label}</p>

        <div className={`${classes["hide-div"]}`}>
          {show && (
            <>
              {" "}
              <p className={`${classes["acc-text"]} f-xxm `}>{item?.text}</p>
              <p className={`${classes["acc-link"]} fw-b`}>
                {" "}
                <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">
                  {item?.link}
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
