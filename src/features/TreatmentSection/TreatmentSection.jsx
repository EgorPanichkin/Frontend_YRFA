import { Typography } from "@/shared";
import { LinkHome } from "../../entities";

import style from "./TreatmentSection.module.scss";

export const TreatmentSection = ({ treatmentData }) => {
  return (
    <div className={style.treatmentBlock}>
      <Typography variant="h3" weight="demibold" color="blue">
        {treatmentData.h2}
      </Typography>
      <div className={style.contentSection}>
        <ul className={style.pieceContent}>
          {treatmentData.contentOne.map((items, index) => (
            <li key={index} className={style.content}>
              <LinkHome content={items} />
            </li>
          ))}
        </ul>
        <ul className={style.pieceContent}>
          {treatmentData.contentToo.map((items, index) => (
            <li key={index} className={style.content}>
              <LinkHome content={items} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
