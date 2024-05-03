import style from "./Actual.module.scss";
import { ActualCard, Container, Typography } from "@/shared";
import { useLoaderData } from "react-router-dom";

export const Actual = () => {
  const { results } = useLoaderData();

  return (
    <div>
      <Container>
        <Typography variant="h2" weight="bold" className={style.header}>
          Актуальные акции
        </Typography>
        <div className={style.flex}>
          {results.map((section, index) => (
            <ActualCard
              key={index}
              reverse={index % 2 !== 0}
              title={section.title}
              expiration={section.stock}
              description={section.description}
              imgSrc={section.image}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
