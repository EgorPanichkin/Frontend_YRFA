import style from "./Line.module.scss";

export const Line = ({ color, className }) => {
  const classNamedGenerated = [style.line, style[color], className]
    .join(" ")
    .trim();

  return <hr className={classNamedGenerated} />;
};
