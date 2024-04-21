import style from "./LocationSelector.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { locationActions } from "@/app/store/locationSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const LocationSelector = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const city = useSelector((state) => state.location.city);
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.getItem("location")
      ? dispatch(
          locationActions.switchLocation(localStorage.getItem("location")),
        )
      : nav("/welcome");
  });

  const handleSelect = (value) => {
    dispatch(locationActions.switchLocation(value));
  };

  const selectAciveClass = (value) => {
    return value == city ? style.active : style;
  };

  return (
    <div className={style.location}>
      <button
        value={"Bishkek"}
        onClick={(e) => handleSelect(e.target.value)}
        className={selectAciveClass("Bishkek")}
      >
        {t("header.cities.bishkek")}
      </button>
      <button
        value={"Osh"}
        onClick={(e) => handleSelect(e.target.value)}
        className={selectAciveClass("Osh")}
      >
        {t("header.cities.osh")}
      </button>
      <button
        value={"Jalal-Abad"}
        onClick={(e) => handleSelect(e.target.value)}
        className={selectAciveClass("Jalal-Abad")}
      >
        {t("header.cities.jalal-abad")}
      </button>
    </div>
  );
};
