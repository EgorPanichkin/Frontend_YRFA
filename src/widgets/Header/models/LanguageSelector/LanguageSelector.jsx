import { useState, useRef, useEffect } from "react";
import style from "./LanguageSelector.module.scss";
import { LanguageIcon, Polygon } from "@/shared";

export const LanguageSelector = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleCities = () => {
    setShow(!show);
  };

  return (
    <div ref={menuRef}>
      <div className={style.selector} onClick={toggleCities}>
        <LanguageIcon />
        Язык
        <Polygon />
      </div>
      {show && <div className={style.menuDropdown}></div>}
    </div>
  );
};
