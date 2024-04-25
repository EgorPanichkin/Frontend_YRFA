import { AnalysisCard } from "@/entities";
import { Container } from "@/shared";
import style from "./AnalysisCards.module.scss";
import { useLoaderData } from "react-router-dom";

export const AnalysisCards = () => {
  const { results } = useLoaderData();

  return (
    <Container>
      <section aria-label="AnalysisCards" className={style.analysisCards}>
        {results?.map((analysis) => (
          <AnalysisCard analysis={analysis} key={analysis.id} />
        ))}
      </section>
    </Container>
  );
};
