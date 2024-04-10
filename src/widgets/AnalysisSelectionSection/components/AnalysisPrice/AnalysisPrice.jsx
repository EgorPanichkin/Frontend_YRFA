/** @format */

import { Typography } from "@/shared";
import style from "./AnalysisPrice.module.scss";

export const AnalysisPrice = ({ priceInfo }) => {
  if (!priceInfo) return;
  return (
    <div className={style.analysisPrice}>
      <div className={style.analysisPriceTop}>
        <Typography variant="body" color="blue500">
          Цена
        </Typography>
      </div>
      <Typography variant="h3" weight="bold" color="blue">
        {priceInfo.price} сом
      </Typography>
      <div className={style.analysisPriceBottom}>
        <Typography variant="span">Сроки результатов</Typography>
        <Typography variant="span" weight="bold" color="blue">
          {priceInfo.results_delivery_time}
        </Typography>
      </div>
    </div>
  );
};
