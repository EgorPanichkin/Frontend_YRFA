import style from "./HeroHome.module.scss";
import { SliderHome } from "@/features";
import { CustomCard } from "@/shared";

export const HeroHome = ({ heroData }) => {
  return (
    <div className={style.blockHero}>
      <SliderHome />
      <div className={style.heroCard}>
        <CustomCard data={heroData} />
        <CustomCard data={heroData} />
      </div>
    </div>
  );
};
