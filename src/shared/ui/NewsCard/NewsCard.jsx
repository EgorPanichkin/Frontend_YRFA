import { Typography } from "@/shared";
import style from "./NewsCard.module.scss";

export const NewsCard = (props) => {
  const { image, title, description, pub_date } = props;
  return (
    <div className={style.card}>
      <div
        className={style.img}
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <button className={style.button}>Подробнее</button>
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
