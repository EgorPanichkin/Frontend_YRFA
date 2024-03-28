import style from "./Accordion.module.scss";
import { Typography } from "@/shared";
import { ChevronDownIcon } from "@/shared/assets/icons";
import { useState } from "react";

export const Accordion = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={style.accordion}
      key={item.title}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={style.header}>
        <Typography>{item.title}</Typography>
        <div className={isActive ? style.iconActive : style.icon}>
          <ChevronDownIcon />
        </div>
      </div>
      <div className={isActive ? style.contentActive : style.content}>
        <Typography>{item.content}</Typography>
      </div>
    </div>
  );
};
