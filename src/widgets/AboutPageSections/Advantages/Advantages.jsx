import { ReusedTextSection, Typography } from "@/shared";
import style from "./Advantages.module.scss";
import { advantages } from "./db.json";

export const Advantages = () => {
  return (
    <div className={style.section}>
      <Typography variant="h3" weight="bold">
        Медицинская клиника ЮРФА обладает рядом преимуществ <br /> Вот основные
        из них:
      </Typography>
      <div className={style.blocks}>
        {advantages.map((item, index) => {
          return (
            <ReusedTextSection
              key={index}
              image={item.image}
              data={item}
              reverse={index % 2 === 0 ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};
