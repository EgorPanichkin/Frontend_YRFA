import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { langAction } from "@/app/store/langSlice";
import i18n from "@/app/i18n/i18n";
import style from "./LanguageSelector.module.scss";
import { CheckIcon, LanguageIcon, PolygonIcon, languages } from "@/shared";
// import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  // const t = useTranslation()

  const select = useSelector((state) => state.language.currentLang);

  // FIX ME
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setShow(false)
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }
  // }, [menuRef])

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
        {select}
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
