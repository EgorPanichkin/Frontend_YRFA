import { Container } from "@/shared";
import { CategorysList, ReusedHero } from "@/widgets";
import { header, text } from "./SelectDirectionPage.json";

export const SelectDirectionPage = () => {
  return (
    <>
      <ReusedHero
        title={header}
        textButton={"Записаться на прием"}
        body={text}
      />
      <Container>
        <CategorysList requestParameter={"analysis"} />
      </Container>
    </>
  );
};
