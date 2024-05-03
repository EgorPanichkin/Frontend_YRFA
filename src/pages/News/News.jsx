import { ArticleCard, Container, Typography } from "@/shared";
import style from "./News.module.scss";
import { useLoaderData } from "react-router-dom";

export const News = () => {
  const { blogArticle } = useLoaderData();
  console.log(blogArticle.image);

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
            <ArticleCard
              image={blog.image}
              title={blog.title}
              mainDescription={blog.main_description}
              pubDate={blog.pub_date}
              id={blog.id}
              key={blog.id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
