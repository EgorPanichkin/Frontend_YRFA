import style from "./LocationSelector.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRegions, selectLocation } from "@/app/store/locationSlice";
import { useSelector, useDispatch } from "react-redux";

export const LocationSelector = () => {
  const [city, setCity] = useState(localStorage.getItem("location"));
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    city ? null : nav("/welcome");
  });

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  const regions = useSelector(selectLocation);

  const handleSelect = (value) => {
    console.log(value);
    setCity(value);
    localStorage.setItem("location", value);
    window.location.reload();
  };

  const selectActiveClass = (value) => {
    return value == city ? style.active : style.neutral;
  };

  return (
    <div className={style.location}>
      {regions.map((region, index) => {
        return (
          <button
            value={region.id}
            onClick={(e) => handleSelect(e.target.value)}
            className={selectActiveClass(region.id)}
            key={index}
          >
            {region.title}
          </button>
        );
      })}
    </div>
  );
};
