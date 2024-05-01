import style from "./HeroAbout.module.scss";
import { Typography } from "@/shared";
import { Line } from "@/shared";

export const HeroAbout = ({ heroData }) => {
  return (
    <div className={style.blockHero}>
      <div className={style.slider}></div>
      <div className={style.heroTitleBlock}>
        <Typography variant="h4" weight="semibold" color="blue500">
          <b>{heroData.h1}</b>
          {heroData.large}
        </Typography>
        <Typography variant="h4" weight="semibold">
          {heroData.h2}
        </Typography>
        <Line className={style.line} />
        <Typography variant="body" color="black400">
          {heroData.p}
        </Typography>
      </div>
    </div>
  );
};
