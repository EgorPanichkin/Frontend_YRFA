import { useLoaderData } from "react-router-dom";
import { Container } from "..";
import parse from "html-react-parser";
import style from "./ArticleBody.module.scss";

export const ArticleBody = () => {
  const data = useLoaderData();
  console.log(data);
  if (data === null) {
    return <div />;
  }

  if (data.main) {
    return (
      <Container>
        <div className={style.text}>{parse(data.main.description)}</div>
      </Container>
    );
  }

  return (
    <Container>
      <div className={style.text}>{parse(data.description)}</div>
    </Container>
  );
};
