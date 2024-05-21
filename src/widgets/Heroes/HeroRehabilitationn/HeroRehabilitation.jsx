import { CustomButton, Typography } from "@/shared";
import style from "./HeroRehabilitation.module.scss";
import data from "./data/data.json";
import image from "@/shared/assets/images/rehabilitationHero.webp";

export const HeroRehabilitation = () => {
  return (
    <section aria-label="HeroRehabilitation">
      <div className={style.heroRehabilitation}>
        <div className={style.heroRehabilitationContent}>
          <div>
            <Typography variant="h2" weight="bold">
              {data.rehabilitation.title}
            </Typography>
            <Typography variant="h3" color="light">
              {data.rehabilitation.subtitle}
            </Typography>
          </div>
          <Typography color="light">{data.rehabilitation.description}</Typography>
          <CustomButton variant="orange" size="small" className={style.heroRehabilitationButton}>
            {data.button}
          </CustomButton>
        </div>
        <img src={image} alt={data.rehabilitation.title} className={style.heroRehabilitationImage} />
      </div>
    </section>
  );
};
