import { LocationIcon, Time } from "@/shared";
import { Typography } from "../..";
import style from "./BranchesCard.module.scss";
export const BranchesCard = ({ cardData }) => {
  const {
    title,
    card_link,
    contacts,
    mon_fri_hours,
    sat_hours,
    sun_hours,
    image,
  } = cardData;

  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        <img src={image} alt="branch" />
      </div>
      <div className={style.text}>
        <Typography variant="h6" weight="bold" className={style}>
          {title}
        </Typography>
        <div className={style.location}>
          <LocationIcon />
          <a href={card_link}>
            <Typography>{contacts}</Typography>
          </a>
        </div>
        <div className={style.schedule}>
          <Time />
          <div>
            <div className={style.day}>
              <Typography color="light">ПОНЕДЕЛЬНИК - ПЯТНИЦА</Typography>
              <Typography color="primary">{mon_fri_hours}</Typography>
            </div>
            <div className={style.day}>
              <Typography color="light">СУББОТА</Typography>
              <Typography color="primary">{sat_hours}</Typography>
            </div>
            <div className={style.day}>
              <Typography color="light">ВОСКРЕСЕНЬЕ</Typography>
              <Typography color="warning">{sun_hours}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
