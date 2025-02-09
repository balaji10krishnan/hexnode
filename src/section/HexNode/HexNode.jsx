import {
  Img1,
  Img2,
  Img3,
  Img4,
  LeftBottom,
  LeftTop,
  RightBottom,
  RightTop,
} from "../../assets/svg/svg";
import Heading from "../../components/Heading/Heading";
import classes from "./HexNode.module.css";
import HexNodeImg from "../../assets/svg/hexnode.svg";

const containers = [
  {
    title: "Adapt to the new normal",
    text: "Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.",
    img: <Img1 />,
    link: "https://www.hexnode.com/mobile-device-management/cloud/signup/",
    linkText: "Try Hexnode on your endpoints",
  },
  {
    title: "Zero compromise security",
    text: "Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises.",
    img: <Img2 />,
    link: "https://www.hexnode.com/mobile-device-management/cloud/signup/",
    linkText: "Try Hexnode on your endpoints",
  },
  {
    title: "Get more done with automation",
    text: "Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks. Do hours’ worth of work in a few minutes.",
    img: <Img3 />,
    link: "https://www.hexnode.com/mobile-device-management/cloud/signup/",
    linkText: "Try Hexnode on your endpoints",
  },
  {
    title: "Unified Policy Management",
    text: "Create a single policy through Hexnode and apply it on all the devices in your organization. Any platform or form factor, achive single pane of glass management with Hexnode.",
    img: <Img4 />,
    link: "https://www.hexnode.com/mobile-device-management/cloud/signup/",
    linkText: "Try Hexnode on your endpoints",
  },
];
const HexNode = () => {
  return (
    <section className={classes["hexnode-bg"]} id="hex-sec">
      <div className={`container container-padding`}>
        <Heading title={"Why Hexnode?"} />
        <div className={classes["container-wrapper"]}>
          {containers.map((container, index) => {
            return (
              <div key={index} className={classes["card"]}>
                <div className={classes["card-wrapper"]}>
                  <div className={classes["title-container"]}>
                    <div className={classes["img"]}>{container.img}</div>
                    <h4 className={classes["title"]}>{container.title}</h4>
                  </div>
                  <p className={classes["text"]}>{container.text}</p>
                  <a
                    className={classes["link-text"]}
                    href={container.link}
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    {container.linkText}
                  </a>
                </div>
              </div>
            );
          })}
          <div className={classes.hexImgCon}>
            <img src={HexNodeImg} alt="hex-node" />
          </div>
          <div className={classes.hexLineImgCon}>
            <LeftTop className={classes.animatedPath} />
            <RightTop className={classes.animatedPath} />
            <LeftBottom className={classes.animatedPath} />
            <RightBottom className={classes.animatedPath} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HexNode;
