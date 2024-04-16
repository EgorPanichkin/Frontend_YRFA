import style from "./ArticleSection.module.scss";
import { CustomButton, Loader, Typography } from "@/shared";
import { useEffect, useState } from "react";
import { DoctorsCard } from "..";
import { useLoaderData } from "react-router-dom";

export const ArticleSection = ({ sectionId, onDataCount }) => {
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();
  useEffect(() => {
    setLoading(false);
    console.log(data.articles);
    onDataCount(data.articles.length);
  }, [data.articles, onDataCount]);
  return (
    <div className={style.articleBlock} id={sectionId}>
      <Typography variant="h4" weight="semibold">
        Статьи
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.flex}>
          {data.articles.map((items) => (
            <DoctorsCard
              {...items}
              key={items.id}
              link={`doctors-articles/${items.slug}`}
            />
          ))}
          <CustomButton color="border" className={style.btn}>
            Посмотреть ещё
          </CustomButton>
        </div>
      )}
    </div>
  );
};
