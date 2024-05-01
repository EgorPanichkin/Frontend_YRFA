import style from "./LocationSelector.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const LocationSelector = () => {
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

  const selectActiveClass = (value) => {
    return value === city ? style.active : style.neutral;
  };

  return (
    <div className={style.location}>
      <button
        value={"Bishkek"}
        onClick={(e) => handleSelect(e.target.value)}
        className={selectActiveClass("Bishkek")}
      >
        {t("header.cities.bishkek")}
      </button>
      <button
        value={"Osh"}
        onClick={(e) => handleSelect(e.target.value)}
        className={selectActiveClass("Osh")}
      >
        {t("header.cities.osh")}
      </button>
      <button
        value={"Jalal-Abad"}
        onClick={(e) => handleSelect(e.target.value)}
        className={selectActiveClass("Jalal-Abad")}
      >
        {t("header.cities.jalal-abad")}
      </button>
    </div>
  );
};
