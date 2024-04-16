import style from "./FAQ.module.scss";
import {
  Accordion,
  Container,
  CustomCard,
  ModalWrapper,
  Typography,
  baseGetRequest,
} from "@/shared";
import { questions, actual } from "./FAQ.db.json";
import { useState } from "react";

export const FAQ = () => {
  const [isActiveCard, setIsActiveCard] = useState(false);

  const [cardSlug, setCardSlug] = useState({});

  const onClickCard = async (slug) => {
    setIsActiveCard(true);
    const response = await baseGetRequest(`/main/about_company/${slug}`);
    if (response) {
      setCardSlug(response);
    }
  };

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
          {actual?.map((item, index) => (
            <CustomCard
              onClick={onClickCard}
              key={item.id}
              data={item}
              option="accent"
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      {isActiveCard && (
        <ModalWrapper onCloseModal={() => setIsActiveCard(false)}>
          {<h1>{cardSlug?.title}</h1>}{" "}
        </ModalWrapper>
      )}
    </Container>
  );
};
