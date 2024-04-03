import { Line, Typography } from "..";
import style from "./VacancyCard.module.scss";

export const VacancyCard = ({ title, salary, vacanciesCount }) => {
  return (
    <div className={style.box}>
      <Typography variant="h3" weight="semibold" color="blue500">
        {title}
      </Typography>
      <Typography variant="h5" color="orange300">
        {salary}
      </Typography>
      <Line />
      <Typography variant="h8" weight="regular" color="blue300">
        {vacanciesCount}
      </Typography>
    </div>
  );
};
