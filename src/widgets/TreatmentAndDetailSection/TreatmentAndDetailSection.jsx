import style from "./TreatmentAndDetailSection.module.scss";
import {
  CustomButton,
  DetailCard,
  PATHS,
  Typography,
  VerticalLine,
} from "@/shared";
import { Link } from "react-router-dom";

export const TreatmentAndDetailSection = ({ treatmentData, detailData }) => {
  return (
    <div className={style.blockTreatmentAndDetail}>
      <div className={style.blockContent}>
        <div className={style.treatmentBlock}>
          <Typography variant="h3" weight="bold" color="blue400">
            {treatmentData.h2}
          </Typography>
          <div className={style.contentSection}>
            <ul className={style.pieceContent}>
              {treatmentData.contentOne.map((items, index) => (
                <li key={index} className={style.content}>
                  <Link to={PATHS.selectDirections}>
                    <Typography
                      variant="h6"
                      weight="regular"
                      color="blue400"
                      className={style.linkText}
                    >
                      {items}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={style.pieceContent}>
              {treatmentData.contentToo.map((items, index) => (
                <li key={index} className={style.content}>
                  <Link to={items?.path}>
                    <Typography
                      variant="h6"
                      weight="regular"
                      color="blue400"
                      className={style.linkText}
                    >
                      {items}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <VerticalLine height="239" />
        <div className={style.blockDetail}>
          <Typography variant="h3" weight="bold" color="blue400">
            {detailData.h2}
          </Typography>
          <DetailCard detailData={detailData} />
        </div>
      </div>
      <CustomButton color="default" icon="chevron">
        {treatmentData.button}
      </CustomButton>
    </div>
  );
};
