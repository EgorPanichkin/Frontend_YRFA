import { Typography } from "@/shared";
import style from "./Partners.module.scss";
import { useLoaderData } from "react-router-dom";

export const Partners = () => {
  const { partners } = useLoaderData();

  return (
    <div className={style.section}>
      <Typography variant="h3" weight="bold">
        Партнеры
      </Typography>
      <div className={style.cards}>
        {partners.map((item, index) => {
          return (
            <a href={item.url} className={style.card} key={index}>
              <img src={item.image} alt={item.title} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
