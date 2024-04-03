/** @format */

import { CustomButton, Typography } from "@/shared";
import style from "./AnalysisContent.module.scss";
import { useState } from "react";

export const AnalysisContent = ({ currentAnalysis }) => {
  const [indexValue, setIndexValue] = useState(0);
  if (!currentAnalysis) return;
  console.log("render");
  return (
    <div className={style.analysisContent}>
      <Typography variant="h2" weight="bold">
        {currentAnalysis.title}
      </Typography>
      <div className={style.analysisContentTabs}>
        {currentAnalysis.details.map((tab, index) => (
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
        {currentAnalysis.details[indexValue].content}
      </Typography>
    </div>
  );
};
