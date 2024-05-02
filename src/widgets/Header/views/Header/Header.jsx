import { Line } from "@/shared";
import { HeaderBottom } from "../HeaderBottom";
import { HeaderTop } from "../HeaderTop";
import style from "./Header.module.scss";
import { useState } from "react";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";
import { Breadcrumbs } from "@/features";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  if (windowWidth < 1124) {
    return <HeaderMobile />;
  }

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
};
