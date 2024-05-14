import { CustomButton, Typography } from "../..";
import style from "./ArticleCard.module.scss";

export const ArticleCard = (props) => {
  const { image, title, mainDescription, pubDate, id } = props;
  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={style.text}>
        <Typography color="light">{pubDate}</Typography>
        <Typography variant="h6" weight="bold" className={style.title}>
          {title}
        </Typography>
        <Typography color="light" truncate={80} className={style.mainText}>
          {mainDescription}
        </Typography>
        <CustomButton
          link={id.toString()}
          variant="neutral"
          size="small"
          className={style.button}
        >
          Подробнее
        </CustomButton>
      </div>
    </div>
  );
};
