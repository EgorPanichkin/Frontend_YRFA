import { Container } from "@/shared";
import { ReusedHero } from "@/widgets";
import { useLoaderData } from "react-router-dom";

import style from "./CharityMoreDetails.module.scss";
import parse from "html-react-parser/lib/index";

export const CharityMoreDetails = () => {
  const articleMoreDetails = useLoaderData();
  console.log(articleMoreDetails);

  const { description, image, title, main_description } = articleMoreDetails;

  const parsedBlock = parse(description);

  return (
    <>
      <ReusedHero
        textButton="Записаться онлайн"
        title={title}
        body={parse(main_description)}
        img={image}
      />
      <Container>
        <div className={style.reusedTextSectionWrapper}>{parsedBlock}</div>
      </Container>
    </>
  );
};
