import { Typography } from "@/shared";
import style from "./Mission.module.scss";
import { missions } from "./db.json";

export const Mission = () => {
  return (
    <div className={style.section}>
      <Typography variant="h2" weight="extraBold">
        Наша миссия и ценности
      </Typography>
      <div className={style.box}>
        {missions.map((mission, index) => (
          <div className={style.card} key={index}>
            <Typography variant="h6" weight="bold" color="blue400">
              {mission?.title}
            </Typography>
            <Typography variant="body2" weight="semibold" color="black400">
              {mission?.text}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
