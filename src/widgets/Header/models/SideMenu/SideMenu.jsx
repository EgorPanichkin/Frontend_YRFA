import { useState, useEffect } from "react";
import { Cross, CustomButton, Logo } from "@/shared";
import style from "./SideMenu.module.scss";
import { Selector } from "../Selector/Selector";
import { PATHS, navigationHeaderLinks } from "@shared/lib/variables";
import { LanguageSelectorMobile } from "../LanguageSelectorMobile/LanguageSelectorMobile";
import { LocationSelectorMobile } from "../LocationSelectorMobile/LocationSelectorMobile";

const { main, services, more } = navigationHeaderLinks;

export const SideMenu = ({ handleClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeMenu = () => {
    setIsVisible(false);
    setTimeout(() => {
      handleClick(false);
    }, 1000); // Duration should match the animation duration
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${style.sideMenu} ${!isVisible ? style.slideOut : ""}`}>
      <div className={style.top}>
        <Logo width={80} height={52} color="#12709A" />
        <Cross color="#BFBFBF" className={style.cross} onClick={closeMenu} />
      </div>
      <CustomButton variant="orange" size="small" className={style.button}>
        Записаться онлайн
      </CustomButton>
      <CustomButton
        link={PATHS.login}
        variant="neutral"
        size="small"
        className={style.button}
      >
        Войти как пациент
      </CustomButton>
      <nav className={style.nav}>
        <Selector items={main.items} title={main.title} />
        <Selector items={services.items} title={services.title} />
        <Selector items={more.items} title={more.title} />
      </nav>
      <div className={style.selectors}>
        <LanguageSelectorMobile />
        <LocationSelectorMobile />
      </div>
    </div>
  );
};
