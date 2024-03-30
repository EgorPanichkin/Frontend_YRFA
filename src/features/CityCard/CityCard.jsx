import { useNavigate } from "react-router-dom";
import style from "./CityCard.module.scss";
import { Typography } from "@/shared";
import { useState } from "react";

export const CityCard = ({ data }) => {
  const nav = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
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
        <h2 className={style.title}>{data.title}</h2>
        <Typography>{data.text}</Typography>
        <button
          className={style.button}
          value={data.city}
          onClick={(e) => handleClick(e.target.value)}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};
