import { Typography } from "@/shared";
import style from "./HeroDirections.module.scss";
import { HeroesSlider } from "@/features";
import { Line } from "@/shared";

export const HeroDirections = ({ heroData }) => {
  return (
    <div className={style.blockHero}>
      <div className={style.heroTitleBlock}>
        <div>
          <Typography variant="heading4" color="black" weight="semibold">
            {heroData.h1}
          </Typography>
          <Typography variant="heading4" color="black" weight="semibold">
            {heroData.h2}
          </Typography>
        </div>
        <Line />
        <Typography variant="body" color="black">
          {heroData.p}
        </Typography>
      </div>
      <div className={style.slider}>
        <HeroesSlider />
      </div>
    </div>
  );
};
