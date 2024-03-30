import { useState, useEffect } from "react";
import style from "./style.module.sass";
import { CurrentSlide } from "./config/сurrentSlide";
import useSlider from "./config/logicSlide";
import { ProgressBar } from "./progressBar";

export const Slider = () => {
  const slides = ["Img1", "Img2", "Img3", "Img4", "Img5"];
  const { currentSlide, handlePrevSlide, handleNextSlide, setUserActive } =
    useSlider(0, slides.length, 7000);

  // отслеживание progress bar
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const progress = ((currentProgress + 1) / slides.length) * 100;
    setCurrentProgress(progress);
  }, [currentSlide, currentProgress, slides.length]);
  /* eslint-disable */

  const handleButtonClick = (action) => {
    setUserActive(false);
    switch (action) {
      case "prev":
        handlePrevSlide();
        break;
      case "next":
        handleNextSlide();
        break;
    }
  };

  return (
    <div className={style.slider}>
      <div className={style.sliderPictures}>
        {slides.map((slide, index) => (
          <CurrentSlide
            key={index}
            content={slide}
            isActive={index === currentSlide}
          />
        ))}
      </div>
      <ProgressBar
        slides={slides}
        currentSlide={currentSlide}
        clickHandler={handleButtonClick}
      />
    </div>
  );
};
