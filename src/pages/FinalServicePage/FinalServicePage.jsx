import { PageNavBar } from "@/features";
import {
  ActualCard,
  ArticleBody,
  Container,
  PriceCard,
  Typography,
} from "@/shared";
import { ReusedHero } from "@/widgets";
import { useLoaderData } from "react-router-dom";
import style from "./FinalServicePage.module.scss";

export const FinalServicePage = () => {
  const { main, actual } = useLoaderData();
  return (
    <>
      <ReusedHero
        title={main.diagnostic_name}
        textButton="Записаться на прием"
        body
        img={main.image}
      />
      <PageNavBar
        links={[
          { text: "О направлении", href: "#about" },
          { text: "Акции", href: "#actual" },
          { text: "Цена", href: "#price" },
        ]}
      />
      <Container>
        <Typography
          variant="h2"
          className={style.price}
          weight="bold"
          id="price"
        >
          Цена
        </Typography>
        <PriceCard text={main.price_description} price={main.price} />
        <Typography
          variant="h2"
          className={style.about}
          weight="bold"
          id="about"
        >
          О направлении
        </Typography>
      </Container>
      <ArticleBody />
      <Container>
        <Typography
          variant="h2"
          className={style.actual}
          weight="bold"
          id="actual"
        >
          Акции
        </Typography>
        <div className={style.flex}>
          {actual.map(
            (section, index) =>
              index < 2 && (
                <ActualCard
                  key={index}
                  title={section.title}
                  expiration={section.stock}
                  description={section.description}
                  imgSrc={section.image}
                  reverse={index % 2 !== 0}
                  option="accent"
                />
              ),
          )}
        </div>
      </Container>
    </>
  );
};
