import style from "./AnalysisSelectionSection.module.scss";
import { useState } from "react";
import { AnalysisContent, AnalysisList, AnalysisPrice } from "./components";
import { useLoaderData } from "react-router-dom";

export const AnalysisSelectionSection = () => {
  const [analysisInformation, setAnalysisInformation] = useState(null);
  const data = useLoaderData();

  return (
    <div className={style.analysisSelectionSection}>
      <AnalysisList analysisData={data} getAnalysis={setAnalysisInformation} />
      <AnalysisContent currentAnalysis={analysisInformation} />
      <AnalysisPrice priceInfo={analysisInformation} />
    </div>
  );
};
