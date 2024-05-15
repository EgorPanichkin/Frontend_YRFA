import { useLoaderData } from "react-router-dom";
import { Container } from "..";
import parse from "html-react-parser";
import "./ArticleBody.scss";

export const ArticleBody = () => {
  const data = useLoaderData();
  if (data === null) {
    return <div />;
  }

  if (data.main) {
    return (
      <Container>
        <div className="rich-text-container">
          {parse(data.main.description)}
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="rich-text-container">{parse(data.description)}</div>
    </Container>
  );
};
