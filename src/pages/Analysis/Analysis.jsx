import { ReusedHero } from "@/widgets";
import { AnalysisCards } from "@/widgets";
import { analysis } from "./analysis.json";
import heroImage from "@/shared/assets/images/analysHero.webp";

export const Analysis = () => {
  return (
    <>
      <ReusedHero title={analysis.header} textButton={analysis.button} body={analysis.text} img={heroImage} />
      <AnalysisCards />
    </>
  );
};
