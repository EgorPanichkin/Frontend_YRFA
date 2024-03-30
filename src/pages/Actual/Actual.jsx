import style from "./Actual.module.scss";
import { ActualCard, Container, Typography } from "@/shared";
import { actuals } from "./db.json";

export const Actual = () => {
  return (
    <div>
      <Container>
        <Typography variant="h3" weight="bold">
          Актуальные скидки
        </Typography>
        <div className={style.flex}>
          {actuals.map((section, index) => (
            <ActualCard
              key={index}
              title={<p>{section.title}</p>}
              discountExpiration={section.discountExpiration}
              imageSrc={section.imageSrc}
              imgPosition={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
