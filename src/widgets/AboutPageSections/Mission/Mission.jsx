import { Typography } from "@/shared";
import style from "./Mission.module.scss";
import { missions } from "./db.json";

export const Mission = () => {
  return (
    <div className={style.section}>
      <Typography variant="h3" weight="bold">
        Наша миссия и ценности
      </Typography>
      <div className={style.box}>
        {missions.map((mission, index) => (
          <div className={style.card} key={index}>
            <Typography variant="h4" weight="bold" className={style.title}>
              {mission?.title}
            </Typography>
            <Typography color="light">{mission?.text}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
