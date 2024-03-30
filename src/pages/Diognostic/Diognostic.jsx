import { HeroDiognostic } from "@/widgets";
import db from "./Diognostic.json";
import { Container } from "@/shared";

export function Diognostic() {
  const heroData = db.diognostic;
  return (
    <Container>
      <HeroDiognostic heroData={heroData} />
    </Container>
  );
}
