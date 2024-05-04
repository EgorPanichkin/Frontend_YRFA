import { AnalysCard, Container } from "@/shared";
import style from "./AnalysisCards.module.scss";
import { useLoaderData } from "react-router-dom";

export const AnalysisCards = () => {
  const { results } = useLoaderData();

  return (
    <Container>
      <section aria-label="AnalysisCards" className={style.analysisCards}>
        {results?.map((analys, index) => (
          <AnalysCard data={analys} key={index} />
        ))}
      </section>
    </Container>
  );
};
