import { useState, useEffect, useRef } from "react";

import style from "./SelectComponent.module.scss";
import { ChevronDown, ChevronUp } from "@/shared";

export const SelectComponent = ({
  selectTitle,
  optionsItems,
  onClickOption,
}) => {
  const [displayChange, setDisplayChange] = useState({
    none: false,
    color: "",
  });
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setDisplayChange((prevState) => ({ ...prevState, none: false }));
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSelect = () => {
    setDisplayChange((prevState) => ({ ...prevState, none: !prevState.none }));
  };

  const handleOptionClick = (option) => {
    onClickOption(option);
    setDisplayChange({ none: false, color: "var(--blue300)" });
  };

  return (
    <div className={style.select} ref={selectRef}>
      <div
        onClick={toggleSelect}
        className={`${style.selectTitle}`}
        style={{ color: displayChange.color }}
      >
        <span>{selectTitle}</span>
        {displayChange.none ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div
        style={{ display: displayChange.none ? "block" : "none" }}
        className={style.selectBlock}
      >
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
    </div>
  );
};
