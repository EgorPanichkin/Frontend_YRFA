import style from "./BrancheCard.module.scss";
import { LocationIcon, Time, Typography } from "@/shared";

import phots from "@shared/assets/images/cardBrancheImg.jpg";

export const BrancheCard = ({ cardData }) => {
  return (
    <div className={style.cardBlock}>
      <img src={phots} alt="img-map-1" className={style.cardImg} />
      <div className={style.cardTitle}>
        <Typography weight="demibold">{cardData.h4}</Typography>
        <div className={style.placePiece}>
          <LocationIcon className={style.icon} />
          <Typography variant="small" weight="semiBold" color="gray">
            {cardData.address}
          </Typography>
          <Typography variant="small" color="blue">
            <a
              href="http://"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              {cardData.street}
            </a>
          </Typography>
        </div>
        <div className={style.timeBlock}>
          <div className={style.timePieces}>
            <Time className={style.icon} />
            <Typography variant="small" color="gray">
              {cardData.working}
            </Typography>
          </div>
          <div className={style.piece}>
            <Typography variant="small" color="gray">
              {cardData.workingDay1}
            </Typography>
            <Typography variant="small" color="gray" weight="semibold">
              {cardData.workingTime1}
            </Typography>
          </div>
          <div className={style.piece}>
            <Typography variant="small" color="gray">
              {cardData.workingDay2}
            </Typography>
            <Typography variant="small" color="gray" weight="semibold">
              {cardData.workingTime2}
            </Typography>
          </div>
          <div className={style.piece}>
            <Typography variant="small" color="gray">
              {cardData.workingDay3}
            </Typography>
            <Typography variant="small" color="orange" weight="semibold">
              {cardData.workingTime3}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
