import { Line } from "@/shared";
import { HeaderBottom } from "../HeaderBottom";
import { HeaderTop } from "../HeaderTop";
import style from "./Header.module.scss";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";
import { Breadcrumbs } from "@/features";

export const Header = () => {
  if (screen.width > 1124) {
    return (
      <div className={style.headerBlock}>
        <div className={style.header}>
          <HeaderTop />
          <Line color={"black100"} />
          <HeaderBottom />
        </div>
        <div className={style.breadcrumbs}>
          <Breadcrumbs />
        </div>
      </div>
    );
  }
  if (screen.width <= 1124 && screen.width >= 760) {
    return;
  }
  if (screen.width < 760) {
    return <HeaderMobile />;
  }
};
