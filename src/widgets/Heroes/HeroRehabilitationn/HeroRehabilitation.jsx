import { Typography } from "@/shared";
import style from "./HeroRehabilitation.module.scss";
import data from "./data/data.json";
import { SignUpButton } from "@/entities";
import image from "@/shared/assets/images/Rehabilitation.webp";

export const HeroRehabilitation = () => {
  return (
    <section aria-label="HeroRehabilitation">
      <div className={style.heroRehabilitation}>
        <div className={style.heroRehabilitationContent}>
          <Typography variant="h4" weight="semibold" color="blue500">
            {data.rehabilitation.title} <br /> {data.rehabilitation.subtitle}
          </Typography>
          <Typography variant="body" weight="regular" color="black400">
            {data.rehabilitation.description}
          </Typography>
          <SignUpButton className={style.heroRehabilitationButton}>
            {data.button}
          </SignUpButton>
        </div>
        <img
          src={image}
          alt={data.rehabilitation.title}
          className={style.heroRehabilitationImage}
        />
      </div>
    </section>
  );
};
