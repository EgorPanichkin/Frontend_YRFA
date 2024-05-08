import {
  Advantages,
  Equipment,
  HeroAbout,
  Mission,
  PartnersFound,
} from "@/widgets";
import { useLoaderData } from "react-router-dom";
import { Container } from "@/shared";

export const About = () => {
  const { partners } = useLoaderData();

  return (
    <Container>
      <HeroAbout />
      <Mission />
      <Equipment />
      <Advantages />
      <PartnersFound title="Партнёры" data={partners} />
    </Container>
  );
};
