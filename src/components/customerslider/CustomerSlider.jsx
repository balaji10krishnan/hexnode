import { useCallback, useEffect, useRef, useState } from "react";
import classes from "./CustomerSlider.module.css";
const sliderList = [
  "Slide 1: Welcome to our platform!",
  "Slide 2: Discover new features.",
  "Slide 3: Engage with the community.",
  "Slide 4: Stay updated with the latest trends.",
  "Slide 5: Thank you for being a part of our journey!",
];

const sliderList1 = [{}];

const CustomerSlider = () => {
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
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          let newIndex = prevIndex + direction;

          console.log(
            "Before update:",
            prevIndex,
            "->",
            newIndex,
            "Direction:",
            direction
          );
          return newIndex;
        });
      }, 2000); // Auto-slide every 2 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [isPaused, direction]); // ✅ Dependencies ensure proper reactivity

  useEffect(() => {
    console.log("Direction changed:", direction);
  }, [direction]);
  useEffect(() => {
    console.log("current index - ", currentIndex);
    // Reverse direction at boundaries
    if (currentIndex >= sliderList.length - 1 || currentIndex <= 0) {
      setDirection((prevDirection) => -prevDirection);
    }

    if (sliderRef.current) {
      sliderRef.current.scrollLeft = currentIndex * slideWidth;
    }
  }, [currentIndex]);
  // const prev = () => {
  //   sliderRef.current.scrollLeft -= 960;
  // };

  // const next = () => {
  //   sliderRef.current.scrollLeft += 960;
  // };
  return (
    <div className={classes.sliderContainer}>
      <button
        className={classes.prev}
        onClick={prev}
        disabled={currentIndex === 0}
      >
        prev
      </button>
      <div className={classes.sliderPanel} ref={sliderRef}>
        {sliderList.map((slide, index) => {
          return (
            <div className={classes.slide} key={index}>
              {slide}
            </div>
          );
        })}
      </div>
      <button
        className={classes.next}
        onClick={next}
        disabled={currentIndex === sliderList.length - 1}
      >
        next
      </button>
    </div>
  );
};

export default CustomerSlider;
