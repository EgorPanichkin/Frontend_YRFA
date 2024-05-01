import style from "./HeroDiognostic.module.scss";
import { Line } from "@/shared";
import { Typography } from "@/shared";

export const HeroDiognostic = ({ heroData }) => {
  return (
    <div className={style.blockHero}>
      <div className={style.slider}></div>
      <div className={style.heroTitleBlock}>
        <Typography variant="h2" weight="semibold">
          {heroData.h1}
        </Typography>
        <Typography variant="h2" weight="regular">
          {heroData.h2}
        </Typography>
        <Line />
        <Typography>{heroData.p}</Typography>
      </div>
    </div>
  );
};
