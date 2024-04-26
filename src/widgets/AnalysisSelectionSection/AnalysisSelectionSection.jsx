import style from "./AnalysisSelectionSection.module.scss";
import { AnalysisContent, AnalysisList, AnalysisPrice } from "./components";
import { useLoaderData } from "react-router-dom";

export const AnalysisSelectionSection = () => {
  const { list, info } = useLoaderData();

  return (
    <div className={style.analysisSelectionSection}>
      <AnalysisList analysisData={list} />
      <AnalysisContent currentAnalysis={info} />
      <AnalysisPrice priceInfo={info} />
    </div>
  );
};
