import style from "./LocationSelectorMobile.module.scss";
import { ChevronDown, LocationIcon } from "@/shared";
import { Typography } from "../../../../shared/ui";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const LocationSelectorMobile = () => {
  const [isActive, setIsActive] = useState(false);
  const [city, setCity] = useState(localStorage.getItem("location"));
  const nav = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    city ? null : nav("/welcome");
  });

  const handleSelect = (value) => {
    window.location.reload();
    setCity(value);
    localStorage.setItem("location", value);
  };

  return (
    <div className={style.selector}>
      <div
        className={style.head}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <LocationIcon />
        <Typography variant="smallBody" weight="bold" className={style.title}>
          {t("header.cities." + city.toLowerCase())}
        </Typography>
        <ChevronDown />
      </div>
      <div className={isActive ? style.menu : style.hiddenMenu}>
        <button
          value={"Bishkek"}
          onClick={(e) => handleSelect(e.target.value)}
          className={style.link}
        >
          <Typography variant="smallBody" color="light">
            {t("header.cities.bishkek")}
          </Typography>
        </button>
        <button
          value={"Osh"}
          onClick={(e) => handleSelect(e.target.value)}
          className={style.link}
        >
          <Typography variant="smallBody" color="light">
            {t("header.cities.osh")}
          </Typography>
        </button>
        <button
          value={"Jalal-Abad"}
          onClick={(e) => handleSelect(e.target.value)}
          className={style.link}
        >
          <Typography variant="smallBody" color="light">
            {t("header.cities.jalal-abad")}
          </Typography>
        </button>
      </div>
    </div>
  );
};
