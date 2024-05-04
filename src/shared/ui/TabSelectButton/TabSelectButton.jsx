import { Typography } from "..";
import style from "./TabSelectButton.module.scss";
import { Counter } from "./view/Counter";

export const TabSelectButton = (props) => {
  const {
    onClick,
    active = false,
    children,
    count = false,
    className,
    variant = "default",
  } = props;

  return (
    <button
      onClick={onClick}
      className={`${style.button} ${active ? `${style.active} ${style[variant]}` : null} ${className}`}
    >
      <Typography variant="extraSmallBody" weight="bold">
        {children}
      </Typography>
      {count && <Counter count={count} />}
    </button>
  );
};
