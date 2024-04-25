import { PageNavBar } from "@/features";
import { Container, CustomButton, CustomCard, Typography } from "@/shared";
import { ArticleBody } from "@/shared/ui/ArticleBody/ArticleBody";
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
          className={style.header}
          weight="semiBold"
          id="about"
        >
          О направлении
        </Typography>
      </Container>
      <ArticleBody />
      <Container>
        <Typography
          variant="h2"
          className={style.header}
          weight="semiBold"
          id="actual"
        >
          Акции
        </Typography>
        <div className={style.flex}>
          {actual.map(
            (section, index) =>
              index < 2 && (
                <CustomCard
                  key={index}
                  data={{
                    h4: `${section.title} ${section.percent}%`,
                    p: `${section.stock}`,
                    img: `${section.image}`,
                  }}
                  reverse={index % 2 !== 0}
                  option="accent"
                />
              ),
          )}
        </div>
        <Typography
          variant="h2"
          className={style.header}
          weight="semiBold"
          id="price"
        >
          Цена
        </Typography>
        <div className={style.price}>
          <Typography variant="h6" weight="bold" color="blue300">
            {main.price} сом
          </Typography>
          <CustomButton color="orange">Записаться</CustomButton>
        </div>
      </Container>
    </>
  );
};
