import { useState, useEffect, useRef } from "react";

import style from "./AccordionForm.module.scss";
import { ChevronDown } from "@/shared";

export const AccordionForm = ({
  accordionTitle,
  optionsItems,
  onClickOption,
}) => {
  const [isActive, setIsActive] = useState(false);
  const accordionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    onClickOption(option);
    setIsActive(false);
  };

  return (
    <div
      className={style.accordion}
      ref={accordionRef}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={style.accordionTop}>
        <span>{accordionTitle}</span>
        <ChevronDown
          className={isActive ? style.chevronDown : style.chevronUp}
        />
      </div>
      {isActive && (
        <div className={style.accordionBottom}>
          {optionsItems.map((optionsItem, index) => (
            <span
              className={style.option}
              onClick={() => handleOptionClick(optionsItem)}
              key={index}
            >
              {optionsItem}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
