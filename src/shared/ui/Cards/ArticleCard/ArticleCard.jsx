import { CustomButton, Typography } from "../..";
import style from "./ArticleCard.module.scss";

export const ArticleCard = ({ data }) => {
  const { image, title, main_description, pub_date, id } = data;

  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        <img src={image} alt="" />
      </div>
      <div className={style.text}>
        <Typography color="light">{pub_date}</Typography>
        <Typography variant="h6" weight="bold" className={style.title}>
          {title}
        </Typography>
        <Typography color="light" truncate={80}>
          {main_description}
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
