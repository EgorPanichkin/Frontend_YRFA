import { Slider } from "@/features";
import style from "./HeroAbout.module.scss";
import { Typography } from "@/shared";

export const HeroAbout = () => {
  return (
    <div className={style.blockHero}>
      <div className={style.text}>
        <Typography variant="h2" weight="bold" id={style.title}>
          ЮРФА - многофункциональный лечебно-диагностический центр для всей
          семьи
        </Typography>
        <Typography id={style.description}>
          Высокий уровень вовлечения представителей целевой аудитории является
          четким доказательством простого факта: новая модель организационной
          деятельности является качественно новой ступенью направлений
          прогрессивного развития. Задача организации, в особенности же
          постоянный количественный рост и сфера нашей активности представляет
          собой интересный эксперимент проверки соответствующих условий
          активизации.
        </Typography>
      </div>
      <Slider />
    </div>
  );
};
