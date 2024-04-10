import { ReusedHero } from "@/widgets";
import { AnalysisCards } from "@/widgets";
import { analysis } from "./analysis.json";

export const Analysis = () => {
  return (
    <>
      <ReusedHero
        title={analysis.header}
        textButton={analysis.button}
        body={analysis.text}
        img={analysis.img}
      />
      <AnalysisCards />
    </>
  );
};
