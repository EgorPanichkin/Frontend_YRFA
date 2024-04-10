import { CustomButton, Typography } from "@/shared";
import style from "./AnalysisContent.module.scss";
import { useState } from "react";

const tabs = [
  { title: "Описание", id: "description" },
  { title: "Подготовка", id: "preparation" },
  { title: "Проведение процедуры", id: "carrying_procedure" },
  { title: "Ожидаемые результаты", id: "expected_results" },
];

export const AnalysisContent = ({ currentAnalysis }) => {
  const [indexValue, setIndexValue] = useState(0);
  if (!currentAnalysis) return;

  return (
    <div className={style.analysisContent}>
      <Typography variant="h2" weight="bold">
        {currentAnalysis.analyse_name}
      </Typography>
      <div className={style.analysisContentTabs}>
        {tabs.map((tab, index) => (
          <CustomButton
            className={
              indexValue === index
                ? style.analysisContentTabActive
                : style.analysisContentTab
            }
            color="default"
            onClick={() => {
              setIndexValue(index);
            }}
            key={tab.id}
          >
            <Typography
              color={indexValue === index ? "white" : "black"}
              className={style.analysisContentText}
              variant="body"
            >
              {tab.title}
            </Typography>
          </CustomButton>
        ))}
      </div>
      <Typography variant="body">
        {currentAnalysis[tabs[indexValue].id]}
      </Typography>
    </div>
  );
};
