import style from "./FAQ.module.scss";
import { Accordion, ActualCard, Container, Typography } from "@/shared";
import { questions, actual } from "./FAQ.db.json";

export const FAQ = () => {
  return (
    <Container>
      <Typography variant={"h3"} weight={"extraBold"} className={style.header}>
        Часто задаваемые вопросы:
      </Typography>
      <div className={style.wrapper}>
        <div className={style.question}>
          {questions.map((item, index) => {
            return <Accordion item={item} key={`item.title${index}`} />;
          })}
        </div>
        <div className={style.actual}>
          {actual?.map((item, index) => {
            return (
              <ActualCard
                key={index}
                title={item.title}
                discountExpiration={item.discountExpiration}
                imageSrc={item.imageSrc}
                imgPosition={item.imgPosition}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
