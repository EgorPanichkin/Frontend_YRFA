import style from "./HeroAbout.module.scss";
import { Typography } from "@/shared";
import { Slider } from "@/features";
import { Line } from "@/shared";

export const HeroAbout = ({ heroData }) => {
  return (
    <div className={style.blockHero}>
      <div className={style.slider}>
        <Slider />
      </div>
      <div className={style.heroTitleBlock}>
        <Typography variant="h4" color="black">
          <b>{heroData.h1}</b>
          {heroData.large}
        </Typography>
        <Typography variant="h4" weight="regular" color="black">
          {heroData.h2}
        </Typography>
        <Line className={style.line} />
        <Typography color="black">{heroData.p}</Typography>
      </div>
    </div>
  );
};
