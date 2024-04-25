import {
  Container,
  LogoCarusel,
  NewsCard,
  ReusedTextSection,
  Typography,
} from "@/shared";
import { project } from "./data.json";

import style from "./CharitySection.module.scss";
import { useLoaderData } from "react-router-dom";

export const CharitySection = () => {
  const { article } = useLoaderData();

  return (
    <Container>
      <div className={style.titleBlock}>
        <Typography className={style.titleBlockTitle} variant="h2" weight="800">
          Заголовок
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur. Porta nibh tellus at id
          viverra nunc sed nascetur tempor. Bibendum nec dignissim in ultrices
          mauris id. Facilisi vulputate massa ut sed nisl suspendisse. Posuere
          amet id dapibus proin. Aliquam lobortis sed odio scelerisque fusce
          nulla at. Vel facilisi sit nulla orci nisl fermentum sed. Lacus est
          accumsan eu adipiscing in leo aliquam ipsum. Accumsan augue quis dolor
          a proin. Molestie vulputate pulvinar placerat egestas molestie quis
          elementum praesent eleifend. Pellentesque dui vitae amet ornare. Etiam
          lacus molestie pellentesque eu neque ullamcorper feugiat duis mauris.
          Tellus nec gravida ullamcorper eget proin faucibus. Risus in pharetra
          suscipit tempor platea. Scelerisque faucibus tortor consectetur leo
          commodo turpis nulla.
        </Typography>
      </div>
      <ReusedTextSection
        title="Проекты"
        contentList={project}
        className={style.reusedTextSection}
      />
      <LogoCarusel title="Фонды" className={style.logoCarusel} />
      <div className={style.newsBlock}>
        <Typography className={style.newsBlockTitle} variant="h2" weight="800">
          Статьи
        </Typography>
        <div className={style.cardsWrapper}>
          {article?.map((card) => (
            <NewsCard {...card} key={card.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};
