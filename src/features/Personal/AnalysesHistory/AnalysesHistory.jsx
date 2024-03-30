import { useAnalysesHistory } from "../config/hook/useAnalysesHistory";
import { AnalysesHistoryComponent } from "../config";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Typography } from "@/shared";

import style from "./analysesHistory.module.sass";

export const AnalysesHistory = () => {
  const { analysesHistoryList } = useAnalysesHistory();
  const navigate = useNavigate();

  return (
    <div className={style.analysesHistoryForm}>
      <div className={style.analysesHistoryFormHead}>
        <ChevronLeft
          width={20}
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
      </div>
      <div className={style.analysesHistoryFormWrapper}>
        {analysesHistoryList.map((analyseHistory, index) => (
          <AnalysesHistoryComponent key={index} {...analyseHistory} />
        ))}
      </div>
    </div>
  );
};
