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
      style={{ backgroundImage: `url(${data.image})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={isHovered ? style.hovered : style.shade}>
        <Typography variant="h2" weight="bold" className={style.title}>
          {data.title}
        </Typography>
        <Typography variant="body">{data.text}</Typography>
        <CustomButton
          onClick={(e) => handleClick(e.target.value)}
          value={data.city}
          className={style.button}
          color="border"
        >
          <Typography>Продолжить</Typography>
        </CustomButton>
      </div>
    </div>
  );
};
