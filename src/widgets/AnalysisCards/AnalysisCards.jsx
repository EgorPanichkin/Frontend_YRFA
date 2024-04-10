import { AnalysisCard } from "@/entities";
import { Container } from "@/shared";
import style from "./AnalysisCards.module.scss";
import { useLoaderData } from "react-router-dom";

export const AnalysisCards = () => {
  const data = useLoaderData();

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
