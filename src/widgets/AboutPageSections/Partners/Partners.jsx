import { Typography } from "@/shared";
import style from "./Partners.module.scss";
import { partners } from "./db.json";

export const Partners = () => {
  return (
    <>
      <Typography variant="h2" weight="extraBold">
        Партнеры
      </Typography>
      <div className={style.wrapper}>
        <div className={style.slider}>
          {partners.map((partner, index) => (
            <a href="#" key={index}>
              <img
                className={style.image}
                src={partner.imageUrl}
                alt="partner"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
