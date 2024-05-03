import style from "./FAQ.module.scss";
import { Accordion, ActualCard, Container, Typography } from "@/shared";
import { useLoaderData } from "react-router-dom";

export const FAQ = () => {
  const { questions, actual } = useLoaderData();

  return (
    <Container>
      <Typography variant="h2" weight="bold" className={style.header}>
        Часто задаваемые вопросы:
      </Typography>
      <div className={style.wrapper}>
        <div className={style.question}>
          {questions.map((item, index) => {
            return (
              <Accordion
                key={index}
                title={item.question}
                content={item.answer}
              />
            );
          })}
        </div>
        <div className={style.actual}>
          {actual.map((item, index) => {
            return (
              index < 4 && (
                <ActualCard
                  key={index}
                  reverse={index % 2 !== 0}
                  title={item.title}
                  expiration={item.stock}
                  description={item.description}
                  imgSrc={item.image}
                />
              )
            );
          })}
        </div>
      </div>
    </Container>
  );
};
