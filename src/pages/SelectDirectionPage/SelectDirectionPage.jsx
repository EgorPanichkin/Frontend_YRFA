import { Container } from "@/shared";
import { CategorysList, ReusedHero } from "@/widgets";
import { useLoaderData } from "react-router-dom";

export const SelectDirectionPage = () => {
  const { category } = useLoaderData();

  return (
    <>
      <ReusedHero
        title={category.category_name}
        textButton={"Записаться на прием"}
        body={category.category_description}
      />
      <Container>
        <CategorysList />
      </Container>
    </>
  );
};
