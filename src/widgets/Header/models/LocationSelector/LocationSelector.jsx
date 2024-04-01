import style from "./LocationSelector.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { locationActions } from "@/app/store/locationSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LocationSelector = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const city = useSelector((state) => state.location.city);

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
        Бишкек
      </button>
      <button
        value={"Osh"}
        onClick={(e) => handleSelect(e.target.value)}
        className={selectAciveClass("Osh")}
      >
        Ош
      </button>
      <button
        value={"Jalal-Abad"}
        onClick={(e) => handleSelect(e.target.value)}
        className={selectAciveClass("Jalal-Abad")}
      >
        Джалал-Абад
      </button>
    </div>
  );
};
