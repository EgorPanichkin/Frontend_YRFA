import { Line, Typography } from "..";
import style from "./VacancyCard.module.scss";

export const VacancyCard = ({ title, salary, vacanciesCount }) => {
  return (
    <div className={style.box}>
      <Typography variant="h3" weight="semibold">
        {title}
      </Typography>
      <Typography variant="h3" color="orange">
        {salary}
      </Typography>
      <Line />
      <Typography variant="h4" weight="regular" color="blue">
        {vacanciesCount}
      </Typography>
    </div>
  );
};
