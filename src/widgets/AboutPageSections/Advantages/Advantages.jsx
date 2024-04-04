import { Typography } from "@/shared";
import style from "./Advantages.module.scss";
import { advantages } from "./db.json";

export const Advantages = () => {
  return (
    <>
      <Typography variant="h2" weight="extraBold">
        Наши преимущества
      </Typography>
      <div className={style.blocks}>
        {advantages.map((advantage, index) => (
          <div key={index} className={style.flex}>
            {index % 2 === 0 ? (
              <>
                <div className={style.txt}>
                  <Typography variant="h5" color="blue400" weight="semibold">
                    {advantage.title}
                  </Typography>
                  <Typography variant="body" weight="regular" color="black400">
                    {advantage.text}
                  </Typography>
                </div>
                <img
                  className={style.image}
                  src={advantage.imageUrl}
                  alt="advantage image"
                />
              </>
            ) : (
              <>
                <img
                  className={style.image}
                  src={advantage.imageUrl}
                  alt="advantage image"
                />
                <div className={style.txt}>
                  <Typography variant="h5" color="blue400" weight="semibold">
                    {advantage.title}
                  </Typography>
                  <Typography variant="body" weight="regular" color="black400">
                    {advantage.text}
                  </Typography>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
