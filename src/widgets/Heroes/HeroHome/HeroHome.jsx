import style from "./HeroHome.module.scss";
import { SliderHome, HomeCards } from "@/features";

export const HeroHome = () => {
  return (
    <div className={style.blockHero}>
      <SliderHome />
      <HomeCards />
    </div>
  );
};
