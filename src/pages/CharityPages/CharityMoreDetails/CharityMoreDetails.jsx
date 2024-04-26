import { ReusedHero } from "@/widgets";
import { useLoaderData } from "react-router-dom";

export const CharityMoreDetails = () => {
  const articleMoreDetails = useLoaderData();

  const { description, image, title } = articleMoreDetails;

  return (
    <>
      <ReusedHero
        // className={style.reusedHero}
        textButton="Запись а прием"
        title={title}
        body={description}
        img={image}
      />
    </>
  );
};
