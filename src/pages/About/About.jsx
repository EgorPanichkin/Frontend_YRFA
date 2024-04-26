import { about, advantages } from "./About.db.json";
import { Equipment, HeroAbout, Mission, Partners } from "@/widgets";
import { Container, Line, ReusedTextSection } from "@/shared";

export const About = () => {
  return (
    <Container>
      <HeroAbout heroData={about} />
      <Line />
      <Mission />
      <Equipment />
      <ReusedTextSection title="Наши преимущества" contentList={advantages} />
      <Partners />
    </Container>
  );
};
