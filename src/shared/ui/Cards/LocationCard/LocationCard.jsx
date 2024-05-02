import { useNavigate } from "react-router-dom";
import { Typography } from "../..";
import style from "./LocationCard.module.scss";
import { useDispatch } from "react-redux";
import { locationActions } from "@/app/store/locationSlice";

export const LocationCard = ({ data }) => {
  const { image, title } = data;

  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleClick = (value) => {
    dispatch(locationActions.switchLocation(value));
    localStorage.setItem("location", value);
    nav("/");
  };

  return (
    <div className={style.card} onClick={() => handleClick(title)}>
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
