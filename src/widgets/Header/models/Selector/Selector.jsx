import { ChevronDown } from "@/shared";
import { Typography } from "../../../../shared/ui";
import style from "./Selector.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Selector = ({ items, title, onNavigate }) => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={style.selector}>
      <div
        className={style.head}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <Typography variant="smallBody" weight="bold">
          {t(title)}
        </Typography>
        <ChevronDown className={isActive ? style.iconOpen : style.icon} />
      </div>
      <div className={isActive ? style.menu : style.hiddenMenu}>
        {items.map((item, index) => {
          return (
            <div className={style.link} key={index} onClick={() => onNavigate(item.path)}>
              <Typography variant="smallBody" color="light">
                {t(item.label)}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};
