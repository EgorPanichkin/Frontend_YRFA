import {
  ArticleCard,
  Container,
  ReusedTextSection,
  Typography,
} from "@/shared";
import { advantages } from "./data.json";

import style from "./CharitySection.module.scss";
import { useLoaderData } from "react-router-dom";

export const CharitySection = () => {
  const { article } = useLoaderData();

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
      <div className={style.newsBlock}>
        <Typography className={style.newsBlockTitle} variant="h3" weight="bold">
          Статьи
        </Typography>
        <div className={style.cardsWrapper}>
          {article?.map((card) => (
            <ArticleCard {...card} key={card.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};
