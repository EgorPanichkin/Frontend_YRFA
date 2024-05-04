import { Typography } from "@/shared";
import style from "./AnalysisPrice.module.scss";

export const AnalysisPrice = ({ priceInfo, className }) => {
  if (!priceInfo) return;
  return (
    <div className={`${style.analysisPrice} ${className}`}>
      <div className={style.section}>
        <Typography variant="h6" weight="bold">
          Цена
        </Typography>
        <Typography variant="h4" weight="bold" color="primary">
          {priceInfo.price} сом
        </Typography>
      </div>
      <div className={style.section}>
        <Typography>Сроки исполнения:</Typography>
        <Typography color="primary" weight="bold">
          {priceInfo.results_delivery_time}
        </Typography>
      </div>
    </div>
  );
};
