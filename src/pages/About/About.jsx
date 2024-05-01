import { Advantages, Equipment, HeroAbout, Mission, Partners } from "@/widgets";
import { Container } from "@/shared";

export const About = () => {
  return (
    <Container>
      <HeroAbout />
      <Mission />
      <Equipment />
      <Advantages />
      <Partners />
    </Container>
  );
};
