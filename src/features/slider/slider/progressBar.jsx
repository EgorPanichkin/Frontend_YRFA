import { ChevronLeft, ChevronRight } from "@/shared";
import style from "./style.module.sass";

export const ProgressBar = ({ slides, currentSlide, clickHandler }) => {
  return (
    <div className={style.sliderBottom}>
      <button className={style.btnToSlide} onClick={() => clickHandler("prev")}>
        <div className={style.icon}>
          <ChevronLeft />
        </div>
      </button>

      <div className={style.progressBar}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${style.progressDot} ${index === currentSlide ? style.activeProgress : ""}`}
            style={{ width: `${index === currentSlide ? "40px" : "10px"}` }}
          />
        ))}
      </div>

      <button className={style.btnToSlide} onClick={() => clickHandler("next")}>
        <div className={style.icon}>
          <ChevronRight />
        </div>
      </button>
    </div>
  );
};
