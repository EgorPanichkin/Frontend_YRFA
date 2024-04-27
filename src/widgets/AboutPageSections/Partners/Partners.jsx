import { Typography } from "@/shared";
import style from "./Partners.module.scss";
import { useLoaderData } from "react-router-dom";

export const Partners = () => {
  const { partners } = useLoaderData();
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
