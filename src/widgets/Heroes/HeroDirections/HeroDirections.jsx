import { Typography } from "@/shared";
import style from "./HeroDirections.module.scss";
import { Slider } from "@/features";

export const HeroDirections = () => {
  return (
    <div className={style.blockHero}>
      <div className={style.text}>
        <Typography variant="h2" weight="bold" className={style.title}>
          Наши Услуги
        </Typography>
        <Typography variant="h3" color="light">
          Профессиональная Медицинская Помощь
        </Typography>
        <Typography className={style.description}>
          Наши Услуги: Профессиональная Медицинская Помощь Мы стремимся
          предоставить вам максимально широкий и качественный спектр медицинских
          услуг, основанный на передовых научных достижениях и лучших практиках
          в медицинской сфере. Наша цель - обеспечить вам не просто лечение, а
          всестороннюю заботу о вашем здоровье, начиная с точной диагностики и
          определения наиболее эффективных методов лечения и заканчивая
          персонализированной реабилитацией и последующим мониторингом вашего
          состояния.
        </Typography>
      </div>
      <Slider />
    </div>
  );
};
