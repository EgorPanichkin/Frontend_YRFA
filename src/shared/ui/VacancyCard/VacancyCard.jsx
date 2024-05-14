import { CustomButton, Typography } from "..";
import style from "./VacancyCard.module.scss";
import { LocationIcon, Price } from "@shared";

export const VacancyCard = (props) => {
  const { title, pub_date, description, date, id } = props;
  return (
    <CustomButton
      className={style.btn}
      link={id.toString()}
      variant="without-style"
    >
      <div className={style.wrapper}>
        <Typography variant="smallBody" weight="semibold" color="light">
          {date}
        </Typography>
        <Typography variant="h3" weight="semibold" color="primary">
          {title}
        </Typography>
        <Typography variant="h7" color="orange300">
          <div className={style.iconText}>
            <Price />
            {pub_date}
          </div>
        </Typography>
        <Typography variant="h7" weight="regular" color="blue300">
          <div className={style.iconText}>
            <LocationIcon />
            {description}
          </div>
        </Typography>
      </div>
    </CustomButton>
  );
};
