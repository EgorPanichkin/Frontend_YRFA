import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./DropdownHeaderMenu.module.scss";
import { ChevronDown, Typography } from "@/shared";
import { useTranslation } from "react-i18next";

export const DropdownHeaderMenu = ({ items, title }) => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div className={style.selector}>
        <Typography variant="smallBody">{t(title)}</Typography>
        <ChevronDown />
        {show && (
          <div className={style.whitespace}>
            <div className={style.menuDropdown}>
              {items.map((item, index) => (
                <Link to={item.path} key={index} className={style.childItem}>
                  <Typography className={style.text}>
                    {t(item.label)}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
