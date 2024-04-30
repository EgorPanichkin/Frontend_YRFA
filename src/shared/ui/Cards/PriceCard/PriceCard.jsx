import { CustomButton, Typography } from "../..";
import style from "./PriceCard.module.scss";

export const PriceCard = ({ text, price }) => {
  return (
    <div className={style.card}>
      <Typography variant="h5" weight="bold">
        {text}
      </Typography>
      <Typography
        variant="h4"
        weight="bold"
        color="primary"
        className={style.price}
      >
        {price} сом
      </Typography>
      <CustomButton variant="orange">Записаться онлайн</CustomButton>
    </div>
  );
};
