import { Typography } from "@/shared";

import style from "./PartnersFound.module.scss";

export const PartnersFound = (props) => {
  const { title, data } = props;

  return (
    <div className={style.section}>
      <Typography variant="h3" weight="bold">
        {title}
      </Typography>
      <div className={style.cards}>
        {data?.map((item, index) => {
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
