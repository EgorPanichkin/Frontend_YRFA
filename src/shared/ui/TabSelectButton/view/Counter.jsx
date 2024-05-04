import { Typography } from "../..";
import style from "./Counter.module.scss";

export const Counter = ({ count }) => {
  return (
    <div className={style.counter}>
      <Typography
        variant="extraSmallBody"
        weight="bold"
        color="dark"
        className={"style.number"}
      >
        {count}
      </Typography>
    </div>
  );
};
