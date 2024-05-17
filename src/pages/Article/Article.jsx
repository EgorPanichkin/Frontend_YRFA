import { ReusedHero } from "@/widgets";
import { useLoaderData } from "react-router-dom";
import style from "./Article.module.scss";
import { ArticleBody } from "@/shared";

export const Article = () => {
  const data = useLoaderData();

  return (
    <>
      <div className={style.article}>
        <ReusedHero
          title={data.title}
          textButton="Запись на прием"
          body={data.main_description}
          img={data.image}
          className={style.hero}
        />
        <div className={style.body}>
          <ArticleBody />
        </div>
      </div>
    </>
  );
};
