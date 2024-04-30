import { Line } from "@/shared";
import { HeaderBottom } from "../HeaderBottom";
import { HeaderTop } from "../HeaderTop";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={style.header}>
      <HeaderTop />
      <Line color={"black100"} />
      <HeaderBottom />
    </div>
  );
};
