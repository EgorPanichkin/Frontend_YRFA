/** @format */

import { AnalysisCard } from "@/entities";
import { Container } from "@/shared";
import data from "./data/data.json";
import style from "./AnalysisCards.module.scss";

export const AnalysisCards = () => {
  return (
    <Container>
      <section aria-label="AnalysisCards" className={style.analysisCards}>
        {data.map((analysis) => (
          <AnalysisCard analysis={analysis} key={analysis.id} />
        ))}
      </section>
    </Container>
  );
};
