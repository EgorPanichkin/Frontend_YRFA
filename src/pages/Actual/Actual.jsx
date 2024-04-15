import style from "./Actual.module.scss";
import { Container, CustomCard, Typography } from "@/shared";
import { useLoaderData } from "react-router-dom";

export const Actual = () => {
  const data = useLoaderData();

  return (
    <div>
      <Container>
        <Typography variant="h3" weight="extraBold" color="blue500">
          Актуальные скидки
        </Typography>
        <div className={style.flex}>
          {data.map((section, index) => (
            <CustomCard
              key={index}
              data={{
                h4: `${section.title} ${section.percent.slice(0, -3)}%`,
                p: `${section.description}`,
                img: `${section.image}`,
              }}
              reverse={index % 2 !== 0}
              option="accent"
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
