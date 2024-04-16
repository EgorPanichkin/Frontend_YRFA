import style from "./DoctorsCard.module.scss";
import { CustomButton, Typography } from "@/shared";

export const DoctorsCard = (props) => {
  const { id, image, link, title, pub_date } = props;

  return (
    <div className={style.articlesCard} key={id}>
      <div className={style.image} style={{ background: `url(${image})` }}>
        <CustomButton color="orange" link={link}>
          Подробнее
        </CustomButton>
      </div>
      <div className={style.contentPiece}>
        <Typography variant="h6" weight="bold" color="blue500">
          {title}
        </Typography>
        <Typography variant="body" weight="regular" color="black300">
          {pub_date}
        </Typography>
      </div>
      <Typography
        variant="body"
        weight="regular"
        color="black400"
        className={style.contentPiece}
      >
        Исследуйте новейшие медицинские технологии! Откройте перед собой мир
        инноваций, улучшающих практику врачей и уход за пациентами. Следите за
        последними достижениями в медицине.
      </Typography>
    </div>
  );
};
