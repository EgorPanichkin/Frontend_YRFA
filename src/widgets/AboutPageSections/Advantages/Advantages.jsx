import { ReusedTextSection, Typography } from "@/shared";
import style from "./Advantages.module.scss";
import { advantages } from "./db.json";

import doctor from "@/shared/assets/images/about/doctor.webp";
import team from "@/shared/assets/images/about/team.webp";
import urfaBishkek from "@/shared/assets/images/about/urfa-bishkek.webp";
import urfaMain from "@/shared/assets/images/about/urfa-main.webp";
import mrt from "@/shared/assets/images/about/mrt.webp";
import mrtMen from "@/shared/assets/images/about/mrt-men.webp";

const images = [mrtMen, mrt, team, doctor, urfaBishkek, urfaMain];

export const Advantages = () => {
  return (
    <div className={style.section}>
      <Typography variant="h3" weight="bold">
        Медицинская клиника ЮРФА обладает рядом преимуществ <br /> Вот основные из них:
      </Typography>
      <div className={style.blocks}>
        {advantages.map((item, index) => {
          return (
            <ReusedTextSection key={index} image={images[index]} data={item} reverse={index % 2 === 0 ? true : false} />
          );
        })}
      </div>
    </div>
  );
};
