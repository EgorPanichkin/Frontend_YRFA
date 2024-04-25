import { PageNavBar } from "@/features";
import { ArticleBody } from "@/shared/ui/ArticleBody/ArticleBody";
import { ReusedHero } from "@/widgets";
import { useLoaderData } from "react-router-dom";
import style from "./Article.module.scss";

export const Article = () => {
  const data = useLoaderData();

  return (
    <>
      <ReusedHero
        title={data.title}
        textButton="Запись на прием"
        body={data.main_description}
        img={data.image}
      />
      <PageNavBar
        links={[
          { text: "Заголовок1", href: "#Заголовок1" },
          { text: "Заголовок2", href: "#Заголовок2" },
          { text: "Заголовок3", href: "#Заголовок3" },
        ]}
      />
      <div className={style.body}>
        <ArticleBody />
      </div>
    </>
  );
};
