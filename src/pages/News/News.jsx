import {
  ArticleCard,
  ChevronDownIcon,
  Container,
  CustomButton,
  Typography,
  baseGetRequest,
} from "@/shared";
import style from "./News.module.scss";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export const News = () => {
  const responseResult = useLoaderData();
  const [data, setData] = useState(responseResult.results);
  const [next, setNext] = useState(responseResult.next);

  const handleMore = async () => {
    const response = await baseGetRequest(next);
    setData([...data, ...response.results]);
    setNext(response.next);
  };

  return (
    <div>
      <Container>
        <Typography variant="h2" weight="bold" className={style.title}>
          Блог
        </Typography>
        <div className={style.wrapper}>
          {data.map((blog) => (
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
        {next && (
          <CustomButton
            onClick={handleMore}
            variant="neutral"
            className={style.btn}
          >
            Ещё <ChevronDownIcon />
          </CustomButton>
        )}
      </Container>
    </div>
  );
};
