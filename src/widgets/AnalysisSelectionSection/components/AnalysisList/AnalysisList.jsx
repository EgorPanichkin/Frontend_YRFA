import { CustomButton, Typography } from "@/shared";
import style from "./AnalysisList.module.scss";
import { Link, useParams } from "react-router-dom";

export const AnalysisList = ({ analysisData }) => {
  const { id } = useParams();

  return (
    <div className={style.leftSideAnalysis}>
      <div className={style.leftSideAnalysisTitle}>
        <Typography variant="h3" color="black">
          Другие анализы
        </Typography>
      </div>
      <div className={style.leftSideAnalysisBody}>
        {analysisData.map((item) => (
          <Link
            to={`/analysis/${item.id}`}
            className={
              +id === item.id
                ? style.leftSideAnalysisItemActive
                : style.leftSideAnalysisItem
            }
            key={item.id}
          >
            <Typography variant="body" color="black">
              {item.analyse_name}
            </Typography>
          </Link>
        ))}
      </div>
      <div className={style.leftSideAnalysisBottom}>
        <CustomButton color="default" type="submit">
          Все анализы
        </CustomButton>
      </div>
    </div>
  );
};
