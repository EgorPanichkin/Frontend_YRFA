import { AnalysesHistoryData } from "../model/AnalysesHistoryData";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, MoreVertical, Typography } from "@/shared";

import style from "./AnalysesHistory.module.scss";
import { AnalysesHistoryComponent } from "./ui/AnalysesHistoryComponent";

export const AnalysesHistory = () => {
  const { analysesHistoryList } = AnalysesHistoryData();

  const navigate = useNavigate();

  return (
    <div className={style.analysesHistoryForm}>
      <div className={style.analysesHistoryFormHead}>
        <ChevronLeft
          size={24}
          onClick={() => navigate(-1)}
          className={style.analysesHistoryBack}
        />
        <Typography
          variant="h2"
          weight="600"
          className={style.analysesHistoryTitle}
        >
          История анализов
        </Typography>
        <MoreVertical className={style.moreVertical} />
      </div>
      <div className={style.analysesHistoryFormWrapper}>
        {analysesHistoryList.map((analyseHistory, index) => (
          <AnalysesHistoryComponent key={index} {...analyseHistory} />
        ))}
      </div>
    </div>
  );
};
