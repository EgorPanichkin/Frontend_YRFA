import style from "./ArticleSection.module.scss";
import {
  ArticleCard,
  ChevronDownIcon,
  CustomButton,
  Loader,
  Typography,
} from "@/shared";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const ArticleSection = ({ sectionId, onDataCount }) => {
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    setLoading(false);
    onDataCount(data.articles.length);
  }, [data.articles, onDataCount]);

  return (
    <div className={style.articleBlock} id={sectionId}>
      <Typography variant="h3" weight="bold">
        Статьи
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={style.flex}>
            {data.articles.map((item) => (
              <ArticleCard
                image={item.image}
                title={item.title}
                mainDescription={item.main_description}
                pubDate={item.pub_date}
                id={`doctors_articles/${item.id}`}
                key={item.id}
              />
            ))}
          </div>
          <CustomButton variant="neutral" className={style.btn}>
            Ещё <ChevronDownIcon />
          </CustomButton>
        </>
      )}
    </div>
  );
};
