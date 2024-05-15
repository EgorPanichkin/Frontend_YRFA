import { ChevronLeft, ChevronRight } from "@/shared";
import style from "./SliderNavbar.module.scss";

export const SliderNavbar = (props) => {
  const { slider, className, content, active } = props;

  const classGenerated = [style.navbar, className].join(" ").trim();

  return (
    <div className={classGenerated}>
      <button onClick={() => slider.current.slidePrev()}>
        <ChevronLeft />
      </button>
      <div className={style.progress}>
        {content?.map((_, index) => {
          return (
            <div
              className={index === active ? style.activeDot : style.dot}
              key={`${index}dot`}
            />
          );
        })}
      </div>
      <button onClick={() => slider.current.slideNext()}>
        <ChevronRight />
      </button>
    </div>
  );
};
