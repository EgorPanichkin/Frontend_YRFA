import style from "./HeroHome.module.scss";
import { Slider } from "@/features";
import { ActualCard } from "@/shared";

export const HeroHome = () => {
  return (
    <div className={style.blockHero}>
      <Slider />
      <div className={style.heroCard}>
        <ActualCard />
        <ActualCard reverse={true} />
      </div>
    </div>
  );
};
