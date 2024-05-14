import {
  ArticleCard,
  Container,
  ReusedTextSection,
  Typography,
} from "@/shared";
import { advantages } from "./data.json";

import style from "./CharitySection.module.scss";
import { useLoaderData } from "react-router-dom";
import { PartnersFound } from "../PartnersFound";

export const CharitySection = () => {
  const { article, fund } = useLoaderData();

  return (
    <Container>
      <Typography variant="h3" weight="bold" className={style.projectTitle}>
        Проекты
      </Typography>
      <div className={style.reusedTextSectionWrapper}>
        {advantages?.map((advantage) => (
          <ReusedTextSection
            key={advantage.id}
            data={advantage}
            image={advantage.image}
            reverse={advantage.id % 2 ? true : false}
          />
        ))}
      </div>
      <PartnersFound title="Фонды" data={fund} />
      <div className={style.newsBlock}>
        <Typography className={style.newsBlockTitle} variant="h3" weight="bold">
          Статьи
        </Typography>
        <div className={style.cardsWrapper}>
          {article?.map((card) => (
            <ArticleCard
              {...card}
              id={`charity-more/${card.id}`}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
