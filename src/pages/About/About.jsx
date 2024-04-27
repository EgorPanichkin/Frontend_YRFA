import { advantages } from "./About.db.json";
import { Equipment, HeroAbout, Mission, Partners } from "@/widgets";
import { Container, Line, ReusedTextSection } from "@/shared";
import { useLoaderData } from "react-router-dom";

export const About = () => {
  const { heroAbout } = useLoaderData();
  return (
    <Container>
      <HeroAbout heroData={heroAbout} />
      <Line />
      <Mission />
      <Equipment />
      <ReusedTextSection title="Наши преимущества" contentList={advantages} />
      <Partners />
    </Container>
  );
};
