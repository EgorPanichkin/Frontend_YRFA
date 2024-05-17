import { useNavigate } from "react-router-dom";
import { Typography } from "..";
import style from "./VacancyCard.module.scss";
import { LocationIcon, Price } from "@shared";

export const VacancyCard = ({ title, price, location, pub_date, id }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/vacancy/${id}`);
  };

  return (
    <div className={style.wrapper} onClick={handleNavigation}>
      <Typography variant="smallBody" weight="semibold" color="light">
        {pub_date}
      </Typography>
      <Typography variant="h3" weight="semibold" color="primary">
        {title}
      </Typography>
      <div className={style.iconText}>
        <Price />
        <Typography variant="h7" color="orange300">
          {price}
        </Typography>
      </div>
      <div className={style.iconText}>
        <LocationIcon />
        <Typography variant="h7" weight="regular" color="blue300">
          {location}
        </Typography>
      </div>
    </div>
  );
};
