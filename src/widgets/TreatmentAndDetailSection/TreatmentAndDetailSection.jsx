import style from "./TreatmentAndDetailSection.module.scss";
import { CustomButton, DetailCard, Typography, VerticalLine } from "@/shared";
import { Link } from "react-router-dom";

export const TreatmentAndDetailSection = ({ treatmentData, detailData }) => {
  return (
    <div className={style.blockTreatmentAndDetail}>
      <div className={style.blockContent}>
        <div className={style.treatmentBlock}>
          <Typography variant="h3" weight="demibold" color="blue">
            {treatmentData.h2}
          </Typography>
          <div className={style.contentSection}>
            <ul className={style.pieceContent}>
              {treatmentData.contentOne.map((items, index) => (
                <li key={index} className={style.content}>
                  <Link to={items.path}>
                    <Typography variant="h4" className={style.linkText}>
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
                    <Typography variant="h4" className={style.linkText}>
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
          <Typography variant="h3" color="blue" weight="demibold">
            {detailData.h2}
          </Typography>
          <DetailCard detailData={detailData} />
        </div>
      </div>
      <CustomButton color="default" icon="chevron">
        <Typography>{treatmentData.button}</Typography>
      </CustomButton>
    </div>
  );
};
