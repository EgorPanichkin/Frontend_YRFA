import { ActualCard, CustomButton, Typography } from "@/shared";
import style from "./Detail.module.scss";

export const Detail = () => {
  return (
    <div className={style.detail}>
      <Typography variant="h3" weight="bold" className={style.header}>
        Подробнее
      </Typography>
      <ActualCard
        className={style.card}
        title="Скидка 30% на все лечение"
        expiration="До 15 мая"
        description="При покупке лечения, лечение еще чего нибудь в подарок"
        imgSrc="href"
      />
      <CustomButton variant="orange" size="medium" className={style.button}>
        Записаться на прием к врачу
      </CustomButton>
    </div>
  );
};
