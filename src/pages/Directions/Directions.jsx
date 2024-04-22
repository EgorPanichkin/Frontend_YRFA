import { Container } from "@/shared";
import {
  HeroDirections,
  ServiceSection,
  TreatmentAndDetailSection,
} from "@/widgets";
import db from "./Directions.db.json";

export const Directions = () => {
  const dataHero = db.heroderctions;
  return (
    <Container>
      <HeroDirections heroData={dataHero} />
      <ServiceSection />
      <TreatmentAndDetailSection detailData={db.detail} />
    </Container>
  );
};
