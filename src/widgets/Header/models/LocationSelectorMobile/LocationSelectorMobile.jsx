import style from "./LocationSelectorMobile.module.scss";
import { ChevronDown, LocationIcon } from "@/shared";
import { Typography } from "../../../../shared/ui";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegions, selectLocation } from "@/app/store/locationSlice";

export const LocationSelectorMobile = () => {
  const [isActive, setIsActive] = useState(false);
  const [city, setCity] = useState(localStorage.getItem("location"));
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    city ? null : nav("/welcome");
  }, [city]);

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  const regions = useSelector(selectLocation);

  const handleSelect = (value) => {
    setCity(value);
    localStorage.setItem("location", value);
    window.location.reload();
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
          {regions?.filter((region) => region.id == city)[0]?.title}
        </Typography>
        <ChevronDown className={isActive ? style.iconOpen : style.icon} />
      </div>
      <div className={isActive ? style.menu : style.hiddenMenu}>
        {regions.map((region) => {
          return (
            <button
              value={region.id}
              onClick={(e) => handleSelect(e.target.value)}
              className={style.link}
              key={region.id}
            >
              {region.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};
