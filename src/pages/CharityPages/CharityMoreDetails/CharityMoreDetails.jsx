import { Container, ReusedTextSection } from "@/shared";
import { ReusedHero } from "@/widgets";
import { useLoaderData } from "react-router-dom";
import { advantages } from "./data.json";

import style from "./CharityMoreDetails.module.scss";

export const CharityMoreDetails = () => {
  const articleMoreDetails = useLoaderData();

  const { description, image, title } = articleMoreDetails;

  return (
    <>
      <ReusedHero
        textButton="Записаться онлайн"
        title={title}
        body={description}
        img={image}
      />
      <Container>
        <div className={style.reusedTextSectionWrapper}>
          {advantages?.map((advantage) => (
            <ReusedTextSection
              key={advantage.id}
              data={advantage}
              image={advantage.image}
              reverse={advantage.id % 2 ? true : false}
            />
          ))}
        </div>
      </Container>
    </>
  );
};
