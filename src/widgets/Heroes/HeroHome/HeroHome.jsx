import style from "./HeroHome.module.scss";
import { HomeCards, SliderHome } from "@/features";

export const HeroHome = () => {
  return (
    <div className={style.blockHero}>
      <SliderHome />
      <HomeCards />
    </div>
  );
};
