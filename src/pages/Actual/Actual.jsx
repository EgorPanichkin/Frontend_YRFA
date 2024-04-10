import style from "./Actual.module.scss";
import { Container, CustomCard, Typography } from "@/shared";
import { actuals } from "./db.json";
import { useLoaderData } from "react-router-dom";

export const Actual = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <Container>
        <Typography variant="h3" weight="extraBold" color="blue500">
          Актуальные скидки
        </Typography>
        <div className={style.flex}>
          {actuals.map((section, index) => (
            <CustomCard
              key={index}
              data={section}
              reverse={index % 2 !== 0}
              option="accent"
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
