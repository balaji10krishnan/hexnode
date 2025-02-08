import classes from "./LogoSlider.module.css";
import Logo1 from "../../assets/svg/logo-1.svg";
import Logo2 from "../../assets/svg/logo-2.svg";
import Logo3 from "../../assets/svg/logo-3.svg";
import Logo4 from "../../assets/svg/logo-4.svg";
import Logo5 from "../../assets/svg/logo-5.svg";
import Logo6 from "../../assets/svg/logo-6.svg";
import Logo7 from "../../assets/svg/logo-7.svg";
import Logo8 from "../../assets/svg/logo-8.png";
import Logo9 from "../../assets/svg/logo-9.svg";
import { useEffect, useRef } from "react";

const LogoSlider = () => {
  const logoImgList = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
  ];
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let width = window.innerWidth <= 640 ? 110 : 160;
      if (sliderRef.current) {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
        sliderRef.current.style.transform = `translateX(-${width}px)`;

        setTimeout(() => {
          sliderRef.current.appendChild(sliderRef.current.firstElementChild);
          sliderRef.current.style.transition = "none";
          sliderRef.current.style.transform = "translateX(0)";
        }, 500);
      }
    }, 2000); // Slide every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={classes.sliderContainer}>
      <div className={classes.sliderPanel} ref={sliderRef}>
        {logoImgList.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img-${index + 1}`}
            className={classes.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
