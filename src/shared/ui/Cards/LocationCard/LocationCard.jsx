import { useNavigate } from "react-router-dom";
import { Typography } from "../..";
import style from "./LocationCard.module.scss";

export const LocationCard = ({ data }) => {
  const { id, image, title } = data;

  const nav = useNavigate();

  const handleClick = (value) => {
    localStorage.setItem("location", value);
    nav("/");
  };

  return (
    <div className={style.card} onClick={() => handleClick(id)}>
      <div className={style.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={style.text}>
        <Typography variant="h3" weight="bold">
          {title}
        </Typography>
      </div>
    </div>
  );
};
