import { useNavigate } from "react-router-dom";
import style from "./CityCard.module.scss";
import { CustomButton, Typography } from "@/shared";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { locationActions } from "@/app/store/locationSlice";

export const CityCard = ({ data }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (value) => {
    dispatch(locationActions.switchLocation(value));
    localStorage.setItem("location", value);
    nav("/");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={style.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={data.image} alt="city" />
      <div className={isHovered ? style.shadeHovered : style.shade}>
        <Typography variant="h2" weight="extraBold" className={style.title}>
          {data.title}
        </Typography>
        <Typography variant="body" color="black400" className={style.text}>
          {data.text}
        </Typography>
        <CustomButton
          color="border"
          className={style.button}
          onClick={() => {
            handleClick(data.city);
          }}
        >
          <Typography>Продолжить</Typography>
        </CustomButton>
        <CustomButton>
          <Typography variant="h9" color="Blue300">
            Продолжить
          </Typography>
        </CustomButton>
      </div>
    </div>
  );
};
