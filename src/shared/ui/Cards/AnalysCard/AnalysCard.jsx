import style from "./AnalysCard.module.scss";
import { CustomButton, Typography } from "../..";

export const AnalysCard = ({ data }) => {
  return (
    <div className={style.card}>
      <Typography variant="h6" weight="bold" color="primary">
        {data.analyse_name}
      </Typography>
      <Typography color="light" className={style.text} truncate={67}>
        {data.description}
      </Typography>
      <CustomButton
        size="small"
        variant="neutral"
        link={`/analysis/${data.id}`}
        className={style.button}
      >
        Подробнее
      </CustomButton>
    </div>
  );
};
