import { Link } from "react-router-dom";
import { Typography } from "../..";
import style from "./ServiceCard.module.scss";

export const ServiceCard = ({ data }) => {
  return (
    <Link to={"current-service/" + data?.id} className={style.card}>
      <div className={style.imageWrapper}>
        <img src={data?.image} alt="service image" />
      </div>
      <div className={style.text}>
        <Typography weight="bold" className={style.title}>
          {data?.diagnostic_name}
        </Typography>
        <Typography
          variant="smallBody"
          color="light"
          truncate={38}
          className={style.description}
        >
          {data?.main_description}
        </Typography>
      </div>
    </Link>
  );
};
