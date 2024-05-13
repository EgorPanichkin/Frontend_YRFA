import style from "./ArticleSection.module.scss";
import {
  ArticleCard,
  ChevronDownIcon,
  CustomButton,
  Typography,
  baseGetRequest,
} from "@/shared";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const ArticleSection = ({ sectionId, onDataCount }) => {
  const responseResult = useLoaderData();
  const [data, setData] = useState(responseResult.articles.results);
  const [next, setNext] = useState(responseResult.articles.next);

  useEffect(() => {
    onDataCount(responseResult.articles.count);
  }, [responseResult, onDataCount]);

  const handleMore = async () => {
    const response = await baseGetRequest(next);
    setData([...data, ...response.results]);
    setNext(response.next);
  };

  return (
    <div className={style.articleBlock} id={sectionId}>
      <Typography variant="h3" weight="bold">
        Статьи
      </Typography>
      <div className={style.flex}>
        {data.map((item) => (
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
      {next && (
        <CustomButton
          onClick={handleMore}
          variant="neutral"
          className={style.btn}
        >
          Ещё <ChevronDownIcon />
        </CustomButton>
      )}
    </div>
  );
};
