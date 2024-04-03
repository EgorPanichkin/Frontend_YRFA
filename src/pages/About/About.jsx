import { about } from "./About.db.json";
import { Equipment, HeroAbout, Advantages, Mission, Partners } from "@/widgets";
import { Container, Line } from "@/shared";

export const About = () => {
  return (
    <Container>
      <HeroAbout heroData={about} />
      <Line />
      <Mission />
      <Equipment />
      <Advantages />
      <Partners />
    </Container>
  );
};
