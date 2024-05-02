import { ChevronDown } from "@/shared";
import { Typography } from "../../../../shared/ui";
import style from "./Selector.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Selector = ({ items, title }) => {
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
        <ChevronDown />
      </div>
      <div className={isActive ? style.menu : style.hiddenMenu}>
        {items.map((item, index) => {
          return (
            <Link to={item.path} className={style.link} key={index}>
              <Typography variant="smallBody" color="light">
                {t(item.label)}
              </Typography>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
