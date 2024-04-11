import { Container, NewsCard, Typography } from "@/shared";
import style from "./News.module.scss";
import { useLoaderData } from "react-router-dom";

export const News = () => {
  const data = useLoaderData();

  return (
    <div>
      <Container>
        <Typography
          variant="h3"
          weight="extraBold"
          color="blue500"
          className={style.title}
        >
          Блог
        </Typography>
        <div className={style.wrapper}>
          {data.map((item, index) => (
            <NewsCard
              key={`${index}${item.slug}`}
              imageUrl={item.image}
              title={item.title}
              date={item.pub_date}
              description={item.title}
              url={`/news/${item.slug}`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
