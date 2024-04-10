/** @format */

import style from "./AnalysisSelectionSection.module.scss";
import data from "../AnalysisCards/data/data.json";
import { useState } from "react";
import { AnalysisContent, AnalysisList, AnalysisPrice } from "./components";

export const AnalysisSelectionSection = () => {
  const [analysisInformation, setAnalysisInformation] = useState(null);

  return (
    <div className={style.analysisSelectionSection}>
      <AnalysisList analysisData={data} getAnalysis={setAnalysisInformation} />
      <AnalysisContent currentAnalysis={analysisInformation} />
      <AnalysisPrice priceInfo={analysisInformation} />
    </div>
  );
};
