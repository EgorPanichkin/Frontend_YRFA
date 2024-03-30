import { useState, useEffect } from "react";
import style from "./style.module.sass";
import { CurrentSlide } from "./config/сurrentSlide";
import useSlider from "./config/logicSlide";
import { ProgressBar } from "./config/progressBar";
import { Typography } from "@/shared";

export const SliderHome = () => {
  const backgroundImages = [
    "url('https://img.freepik.com/free-psd/hospital-room-with-bed-table-generative-ai_587448-2097.jpg')",
    "url('/path/to/background2.jpg')",
    "url('/path/to/background3.jpg')",
    "url('/path/to/background4.jpg')",
    "url('/path/to/background5.jpg')",
    "url('/path/to/background5.jpg')",
  ];
  const { currentSlide, handlePrevSlide, handleNextSlide, setUserActive } =
    useSlider(0, backgroundImages.length, 4000);

  const slideContent = [
    {
      h4: "Вместе к здоровью!",
      p: "Ваш надежный партнер - медицинский центр ЮРФА!",
      button: "Записаться на прием",
    },
    {
      h4: "Полная диагностика со скидкой -20%",
      p: "Мы делаем здоровье доступным и удобным для всех",
      button: "Диагностика",
    },
    {
      h4: "Лечение глаз и восстановление зрения",
      p: "С выгодой до -40%",
      button: "Подробнее",
    },
    {
      h4: "Получите вакцину и защитите свой организм",
      p: "Во все дни недели с 8:00 до 14:00",
      button: "Подробнее",
    },
    {
      h4: "Самые лучшие специалисты",
      p: "Запишитесь на прием и получите полную консультацию у опытного врача",
      button: "Команда и руководство",
    },
    {
      h4: "Процедуры, на которые идут акции и скидки",
      p: "Перейдите на страницу чтобы узнать больше",
      button: "Акции и скидки",
    },
  ];
  // отслеживание progress bar
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const progress = ((currentProgress + 1) / backgroundImages.length) * 100;
    setCurrentProgress(progress);
  }, [currentSlide, backgroundImages.length]);

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
        {backgroundImages.map((backgroundImage, index) => (
          <CurrentSlide
            key={index}
            backgroundClass={backgroundImage}
            isActive={index === currentSlide}
          />
        ))}
        <div className={style.sliderBottom}>
          <Typography variant="h4" color="darkBlue" weight="semibold">
            {slideContent[currentSlide].h4}
          </Typography>
          <Typography variant="small" color="blue" weight="semibold">
            {slideContent[currentSlide].p}
          </Typography>
          <button className={`${style.sliderTitleButton} ${style.button}`}>
            <Typography variant="small" color="white" weight="semibold">
              {slideContent[currentSlide].button}
            </Typography>
          </button>
        </div>
        <ProgressBar
          slides={backgroundImages}
          currentSlide={currentSlide}
          clickHandler={handleButtonClick}
        />
      </div>
    </div>
  );
};
