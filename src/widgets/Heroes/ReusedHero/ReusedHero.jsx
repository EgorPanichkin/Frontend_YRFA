import { SignUpButton } from "@/entities";
import style from "./ReusedHero.module.scss";
import { Typography } from "@/shared";

export const ReusedHero = ({ heroData }) => {
  return (
    <section className={style.hero}>
      <div className={style.textBlock}>
        <Typography variant="h1" weight="bold" color="white">
          {heroData?.header}
        </Typography>
        <Typography color="white">{heroData?.text}</Typography>
        <SignUpButton>Записаться на прием</SignUpButton>
      </div>
    </section>
  );
};
