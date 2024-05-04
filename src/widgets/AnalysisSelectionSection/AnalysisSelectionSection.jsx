import style from "./AnalysisSelectionSection.module.scss";
import { AnalysisContent, AnalysisList, AnalysisPrice } from "./view";
import { useLoaderData } from "react-router-dom";

export const AnalysisSelectionSection = () => {
  const { list, info } = useLoaderData();

  return (
    <div className={style.analysisSelectionSection}>
      <AnalysisList analysisData={list} className={style.list} />
      <AnalysisContent currentAnalysis={info} className={style.content} />
      <AnalysisPrice priceInfo={info} className={style.price} />
    </div>
  );
};
