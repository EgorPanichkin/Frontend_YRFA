import style from "../style.module.sass";

export const CurrentSlide = ({ content, isActive }) => (
  <p
    className={`${style.slide} ${isActive ? style.activeSlide : style.hiddenSlide}`}
  >
    {content}
  </p>
);
