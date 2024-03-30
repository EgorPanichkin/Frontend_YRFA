import style from "./VerticalLine.module.scss";

export const VerticalLine = ({ height }) => {
  return (
    <hr className={style.verticalLine} style={{ height: `${height}px` }} />
  );
};
