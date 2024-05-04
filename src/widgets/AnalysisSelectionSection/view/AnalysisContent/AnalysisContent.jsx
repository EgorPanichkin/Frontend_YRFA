import { TabSelectButton, Typography } from "@/shared";
import style from "./AnalysisContent.module.scss";
import { useState } from "react";

const tabs = [
  { title: "Описание", id: "description" },
  { title: "Подготовка", id: "preparation" },
  { title: "Проведение процедуры", id: "carrying_procedure" },
  { title: "Результаты", id: "expected_results" },
];

export const AnalysisContent = ({ currentAnalysis, className }) => {
  const [indexValue, setIndexValue] = useState(0);
  if (!currentAnalysis) return;

  return (
    <div className={`${style.analysisContent} ${className}`}>
      <Typography variant="h6" weight="bold" color="primary">
        {currentAnalysis.analyse_name}
      </Typography>
      <div className={style.analysisContentTabs}>
        {tabs.map((tab, index) => (
          <TabSelectButton
            active={indexValue === index}
            onClick={() => {
              setIndexValue(index);
            }}
            key={tab.id}
            className={style.tab}
            variant="primary"
          >
            {tab.title}
          </TabSelectButton>
        ))}
      </div>
      <Typography color="light">
        {currentAnalysis[tabs[indexValue].id]}
      </Typography>
    </div>
  );
};
