import { useLoaderData } from "react-router-dom";
import { Container } from "..";
import parse from "html-react-parser";
import style from "./ArticleBody.module.scss";

export const ArticleBody = () => {
  const data = useLoaderData();

  return (
    <Container>
      <div className={style.text}>{parse(data.description)}</div>
    </Container>
  );
};
