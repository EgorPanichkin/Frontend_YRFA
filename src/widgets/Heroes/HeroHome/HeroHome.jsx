import style from "./HeroHome.module.scss";
import { Slider } from "@/features";
import { ActualCard } from "@/shared";

export const HeroHome = () => {
  return (
    <div className={style.blockHero}>
      <Slider />
      <div className={style.actualCards}>
        <ActualCard
          title="Скидка 30% на все лечение"
          expiration="До 15 мая"
          description="При покупке лечения, лечение еще чего нибудь в подарок"
          imgSrc="href"
        />
        <ActualCard
          reverse={true}
          title="Скидка 30% на все лечение"
          expiration="До 15 мая"
          description="При покупке лечения, лечение еще чего нибудь в подарок"
          imgSrc="href"
        />
      </div>
    </div>
  );
};
