import style from "./Accordion.module.scss";
import { Typography } from "@/shared";
import { ChevronDownIcon } from "@/shared/assets/icons";
import { useState } from "react";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style.accordion} onClick={() => setIsActive(!isActive)}>
      <div className={style.header}>
        <Typography variant="h7" weight="semibold" color="blue500">
          {title}
        </Typography>
        <div className={isActive ? style.iconActive : style.icon}>
          <ChevronDownIcon />
        </div>
      </div>
      <div className={isActive ? style.contentActive : style.content}>
        <Typography variant="body" weight="regular" color="black400">
          {content}
        </Typography>
      </div>
    </div>
  );
};
