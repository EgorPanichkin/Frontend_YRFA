import { Typography } from "@/shared";
import style from "./NewsCard.module.scss";
import { Link } from "react-router-dom";

export const NewsCard = (props) => {
  const { image, title, description, pub_date, id } = props;
  return (
    <div className={style.card}>
      <div
        className={style.img}
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <Link to={id.toString()} className={style.button}>
          Подробнее
        </Link>
      </div>
      <div className={style.cardBody}>
        <div className={style.cardBodyTop}>
          <Typography variant="h6" weight="bold" color="blue500">
            {title}
          </Typography>
          <Typography className={style.cardBodyDate} variant="h10">
            {pub_date}
          </Typography>
        </div>
        <Typography
          truncate={120}
          variant="body"
          weight="regular"
          color="black400"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};
