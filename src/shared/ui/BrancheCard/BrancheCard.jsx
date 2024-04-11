import style from "./BrancheCard.module.scss";
import { LocationIcon, Time, Typography } from "@/shared";

import phots from "@shared/assets/images/cardBrancheImg.jpg";

export const BrancheCard = ({ cardData }) => {
  return (
    <div className={style.cardBlock}>
      <img src={phots} alt="img-map-1" className={style.cardImg} />
      <div className={style.cardTitle}>
        <Typography variant="h7" weight="bold">
          {cardData.h4}
        </Typography>
        <div className={style.placePiece}>
          <LocationIcon className={style.icon} />
          <Typography variant="h8" color="black300" weight="semibold">
            {cardData.address}
          </Typography>
          <a
            href="http://"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            <Typography variant="body2" color="blue300">
              {cardData.street}
            </Typography>
          </a>
        </div>
        <div className={style.timeBlock}>
          <div className={style.timePieces}>
            <Time className={style.icon} />
            <Typography variant="h8" color="black300" weight="semibold">
              {cardData.working}
            </Typography>
          </div>
          <div className={style.piece}>
            <Typography variant="h8" color="black300" weight="semibold">
              {cardData.workingDay1}
            </Typography>
            <Typography variant="h8" color="black400" weight="semibold">
              {cardData.workingTime1}
            </Typography>
          </div>
          <div className={style.piece}>
            <Typography variant="h8" color="black300" weight="semibold">
              {cardData.workingDay2}
            </Typography>
            <Typography variant="h8" color="black400" weight="semibold">
              {cardData.workingTime2}
            </Typography>
          </div>
          <div className={style.piece}>
            <Typography variant="h8" color="black300" weight="semibold">
              {cardData.workingDay3}
            </Typography>
            <Typography variant="h8" color="orange300" weight="semibold">
              {cardData.workingTime3}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
