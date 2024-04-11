import { Typography } from "@/shared";
import style from "./NewsCard.module.scss";
import { Link } from "react-router-dom";

export const NewsCard = ({ imageUrl, title, date, description, url }) => {
  return (
    <div className={style.box}>
      <div className={style.section}>
        <div
          className={style.image}
          style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
        >
          <Link to={url}>
            <button>Подробнее</button>
          </Link>
        </div>
        <div className={style.flex}>
          <Typography variant="h6" weight="bold" color="blue500">
            {title}
          </Typography>
          <Typography variant="body" weight="regular" color="black300">
            {date}
          </Typography>
        </div>
        <Typography
          className={style.flex}
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
