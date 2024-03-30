import { useState, useEffect } from "react";

const useSlider = (initialSlide = 0, totalSlides, interval = 7000) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [userActive, setUserActive] = useState(true);

  const handlePrevSlide = () => {
    const newIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
    setUserActive(true);
  };

  const handleNextSlide = () => {
    const newIndex = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
    setUserActive(true);
  };

  useEffect(() => {
    let autoSlider;

    if (userActive) {
      autoSlider = setInterval(() => {
        handleNextSlide();
      }, interval);
    }

    return () => {
      clearInterval(autoSlider);
    };
  }, [currentSlide, interval, userActive, totalSlides]);

  return { currentSlide, handlePrevSlide, handleNextSlide, setUserActive };
};

export default useSlider;
