import { ReusedHero } from "@/widgets";
import { AnalysisCards } from "@/widgets";
import data from "./analysis.json";

export const Analysis = () => {
  return (
    <>
      <ReusedHero heroData={data.analysis} />
      <AnalysisCards />
    </>
  );
};
