import { Typography } from "@/shared";
import style from "./AnalysisList.module.scss";
import { Link, useParams } from "react-router-dom";

export const AnalysisList = ({ analysisData, className }) => {
  const { id } = useParams();

  return (
    <div className={`${style.leftSideAnalysis} ${className}`}>
      <div className={style.leftSideAnalysisTitle}>
        <Typography variant="h6" weight="bold">
          Все анализы
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
            <Typography
              weight={+id === item.id ? "bold" : null}
              color={+id === item.id ? "dark" : null}
            >
              {item.analyse_name}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};
