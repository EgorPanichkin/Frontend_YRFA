import style from "./LanguageSelectorMobile.module.scss";
import { ChevronDown, LanguageIcon, languages } from "@/shared";
import { Typography } from "../../../../shared/ui";
import { useDispatch, useSelector } from "react-redux";
import { langAction } from "@/app/store/langSlice";
import { useState } from "react";
import i18n from "@/app/i18n/i18n";
import { useEffect } from "react";

export const LanguageSelectorMobile = () => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const select = useSelector((state) => state.language.currentLang);

  const correctValue = { ru: "Русский", kg: "Кыргызча", en: "English" };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    i18n.changeLanguage(lang);
  }, [select]);

  const handleSelect = (title, lang) => {
    dispatch(langAction.switchLanguage(lang));
  };

  return (
    <div className={style.selector}>
      <div
        className={style.head}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <LanguageIcon />
        <Typography variant="smallBody" weight="bold" className={style.title}>
          {correctValue[select]}
        </Typography>
        <ChevronDown className={isActive ? style.iconOpen : style.icon} />
      </div>
      <div className={isActive ? style.menu : style.hiddenMenu}>
        {languages.map((item, index) => {
          return (
            <div
              value={item.lang}
              className={style.link}
              onClick={() => handleSelect(item.title, item.lang)}
              key={index}
            >
              <Typography variant="smallBody" color="light">
                {item.title}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};
