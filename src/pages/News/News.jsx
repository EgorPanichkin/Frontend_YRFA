import { Container, NewsCard, Typography } from "@/shared";
import { newsSections } from "./db.json";
import style from "./News.module.scss";

export const News = () => {
  return (
    <div>
      <Container>
        <Typography variant="h3" weight="extraBold" color="blue500">
          Последние новости:
        </Typography>
        <div className={style.wrapper}>
          {newsSections.map((section, index) => (
            <NewsCard
              key={index}
              imageUrl={section.imageSrc}
              title={section.title}
              date={section.date}
              description={section.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
