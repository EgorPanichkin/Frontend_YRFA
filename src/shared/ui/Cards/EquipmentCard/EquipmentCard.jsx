import { ChevronDown } from "@/shared";
import { Typography } from "../..";
import style from "./EquipmentCard.module.scss";
import { useState } from "react";

export const EquipmentCard = (props) => {
  const { title, description, image } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={style.selector}>
        <div
          className={style.head}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <Typography weight="bold">{title}</Typography>
          <ChevronDown />
        </div>
        <div
          className={isActive ? style.menu : style.hiddenMenu}
          onClick={() => {
            setIsActive(false);
          }}
        >
          <Typography>{description}</Typography>
        </div>
      </div>
    </div>
  );
};
