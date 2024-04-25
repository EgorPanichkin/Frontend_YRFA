import { useLoaderData } from "react-router-dom";
import { Container } from "..";
import parse from "html-react-parser";
import style from "./ArticleBody.module.scss";

export const ArticleBody = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <Container>
      <div className={style.text}>
        {data ? parse(data.description) : "data loading"}
      </div>
    </Container>
  );
};
