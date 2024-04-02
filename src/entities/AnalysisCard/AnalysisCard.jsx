/** @format */

import { Link } from "react-router-dom";
import { Typography } from "@/shared/ui";
import style from "./AnalysisCard.module.scss";

export const AnalysisCard = ({ analysis }) => {
  return (
    <Link to={`/analysis/${analysis.id}`} className={style.analysisCard}>
      <div className={style.analysisCardImage}>
        <img src="" alt={analysis.title} />
      </div>
      <div className={style.analysisCardContent}>
        <Typography variant="h3" color="blue">
          {analysis.title}
        </Typography>
        <Typography variant="body" color="darkBlue">
          {analysis.description}
        </Typography>
      </div>
    </Link>
  );
};
