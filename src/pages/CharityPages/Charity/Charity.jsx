import { CharitySection, ReusedHero } from "@/widgets";
import style from "./Charity.module.scss";
import img from "@/shared/assets/images/charity.webp";

export const Charity = () => {
  return (
    <>
      <ReusedHero
        className={style.reusedHero}
        title="Благотворительность"
        body="ОсОО «Юнит-Реактив-Фарма» (ЮРФА) со дня своего создания проявляет внимательное отношение к интересам общества, оказывая спонсорскую помощь и занимаясь благотворительностью."
        textButton="Записаться онлайн"
        img={img}
      />
      <CharitySection />
    </>
  );
};
