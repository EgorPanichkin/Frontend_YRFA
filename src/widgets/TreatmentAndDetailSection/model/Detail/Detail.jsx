import { ActualCard, CustomButton, Typography } from "@/shared";
import style from "./Detail.module.scss";
import { useLoaderData } from "react-router-dom";

export const Detail = () => {
  const { actual } = useLoaderData();

  return (
    <div className={style.detail}>
      <Typography variant="h3" weight="bold" className={style.header}>
        Подробнее
      </Typography>
      <ActualCard
        className={style.card}
        title={actual[0].title}
        expiration={actual[0].expiration}
        description={actual[0].description}
        imgSrc={actual[0].image}
      />
      <CustomButton variant="orange" size="medium" className={style.button}>
        Записаться на прием к врачу
      </CustomButton>
    </div>
  );
};
