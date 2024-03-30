import style from "../style.module.sass";

export const CurrentSlide = ({ backgroundClass, isActive }) => (
  <div
    className={`${style.slide} ${isActive ? style.activeSlide : style.hiddenSlide}`}
    style={{ backgroundImage: `url('${backgroundClass}')` }}
  />
);
