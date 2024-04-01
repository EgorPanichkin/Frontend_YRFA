import { Container } from "@/shared";
import { CategorysList, ReusedHero } from "@/widgets";
import data from "./SelectDirectionPage.json";

export const SelectDirectionPage = () => {
  return (
    <>
      <ReusedHero heroData={data} />
      <Container>
        <CategorysList requestParameter={"analysis"} />
      </Container>
    </>
  );
};
