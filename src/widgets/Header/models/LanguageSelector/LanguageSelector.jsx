import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { langAction } from "@/app/store/langSlice";
import i18n from "@/app/i18n/i18n";
import style from "./LanguageSelector.module.scss";
import { CheckIcon, LanguageIcon, PolygonIcon, languages } from "@/shared";

export const LanguageSelector = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const select = useSelector((state) => state.language.currentLang);

  const correctValue = { ru: "Русский", kg: "Кыргызча", en: "English" };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    i18n.changeLanguage(lang);
  }, [select]);

  const toggleCities = () => {
    setShow(!show);
  };

  const handleSelect = (title, lang) => {
    dispatch(langAction.switchLanguage(lang));
    setShow(false);
  };

  return (
    <div ref={menuRef}>
      <div className={style.selector} onClick={toggleCities}>
        <LanguageIcon />
        {correctValue[select]}
        <PolygonIcon />
      </div>
      {show && (
        <div className={style.menuDropdown}>
          {languages.map((item, index) => (
            <div
              value={item.lang}
              key={index}
              className={style.link}
              onClick={() => handleSelect(item.title, item.lang)}
            >
              <div className={style.childItem}>
                {item.title}
                {select === item.lang && <CheckIcon />}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
