import { Container, NewsCard, Typography } from "@/shared";
import style from "./News.module.scss";
import { useLoaderData } from "react-router-dom";

export const News = () => {
  const { blogArticle } = useLoaderData();

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
          {blogArticle?.map((blog) => (
            <NewsCard key={blog.id} {...blog} />
          ))}
        </div>
      </Container>
    </div>
  );
};
