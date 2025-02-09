import { useCallback, useEffect, useRef, useState } from "react";
import classes from "./CustomersSlider.module.css";
import User1 from "../../assets/png/user-1.webp";
import User2 from "../../assets/png/user-2.webp";
import User3 from "../../assets/png/user-3.webp";
import PrevIcon from "../../assets/svg/prev-arrow-icon.svg";
import NextIcon from "../../assets/svg/next-arrow-icon.svg";

const sliderList = [
  {
    text: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    detail: ["Technology Coordinator", "East Troy Community School District"],
    img: User1,
  },
  {
    text: "Most complete MDM solution I found, and I tested many of them, including major names",
    name: "Dalibor Kruljac",
    detail: ["KAMELEYA LTD"],
    img: User2,
  },
  {
    text: "It seemed to be in-line with everything we were looking at.",
    name: "Chris Robinson",
    detail: ["Executive Account Manager, NCS"],
    img: User3,
  },
];

const CustomersSlider = () => {
  const sliderRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(920); //adjust slide width
  const [currentIndex, setCurrentIndex] = useState(0); //adjust slide index
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      pauseAutoSlide();
    }
  };
  const pauseAutoSlide = useCallback(() => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000); // Resume auto-slide after 2 seconds
  }, []);

  const next = () => {
    if (currentIndex < sliderList.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      pauseAutoSlide();
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setSlideWidth(
        window.innerWidth <= 320
          ? 200
          : window.innerWidth <= 686
          ? 280
          : window.innerWidth <= 768
          ? 400
          : 920
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          let newIndex = prevIndex + direction;
          return newIndex;
        });
      }, 10000); // Auto-slide every 2 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [isPaused, direction]);

  useEffect(() => {
    // Reverse direction at boundaries
    if (currentIndex >= sliderList.length - 1 || currentIndex <= 0) {
      setDirection((prevDirection) => -prevDirection);
    }

    if (sliderRef.current) {
      sliderRef.current.scrollLeft = currentIndex * slideWidth;
    }
  }, [currentIndex]);
  return (
    <div className={classes["slider-container"]}>
      <button
        className={[classes["prev"], classes["slider-btn"]].join(" ")}
        onClick={prev}
        disabled={currentIndex === 0}
      >
        <img src={PrevIcon} alt="prev" />
      </button>
      <div className={classes["slider-panel"]} ref={sliderRef}>
        {sliderList.map((slide, index) => {
          return (
            <div className={classes["slide"]} key={index}>
              <img src={slide.img} alt={`User ${index + 1}`} />
              <div className={classes["slide-content"]}>
                <div className={classes["title-con"]}>
                  <h4>{`"${slide["text"]}"`}</h4>
                </div>
                <div className={classes["text-con"]}>
                  <div className={classes["name-text"]}>{slide.name}</div>
                  <div className={classes["detail"]}>
                    {slide.detail.map((detail, detailIndex) => {
                      return <p key={`${index}-${detailIndex}`}>{detail}</p>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={[classes["next"], classes["slider-btn"]].join(" ")}
        onClick={next}
        disabled={currentIndex === sliderList.length - 1}
      >
        <img src={NextIcon} alt="next" />
      </button>
    </div>
  );
};

export default CustomersSlider;
