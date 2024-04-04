import style from "./ServiceSection.module.scss";
import { ServiceCard, Typography } from "@/shared";
import { useState, useEffect, useRef } from "react";

export const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownRef = useRef(null);
  const selectedCity = "Bishkek";
  const dataCity = {
    Osh: "Ош",
    "Jalal-Abad": "Джалал-Абад",
    Bishkek: "Бишкек",
  };
  const handleClickActive = (clickedIndex) => {
    if (activeIndex === clickedIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(clickedIndex);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (setActiveIndex) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setActiveIndex(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const data = [
    {
      title: "Название",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_JlSBVpmC8TcaxsGbAOpGV9VfbwCScLZwQ&usqp=CAU",
    },
    {
      title: "Название",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToc7l9rXp0jsSUPXfgjAWDV1lBehyqb1Pl_w&usqp=CAU",
    },
    {
      title: "Название",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyFQK7HoUiUUuEJWhrJUDysGtkopUHYTNAg&usqp=CAU",
    },
    {
      title: "Название",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAxsTu1mKlnuqvPCfD4lDo-i8S4SOe38P_Q&usqp=CAU",
    },
  ];
  const dataTitle = `Услуги города ${dataCity[selectedCity]}`;
  return (
    <div className={style.servicesBlock} ref={dropdownRef}>
      <Typography variant="h2" weight="extraBold">
        {dataTitle}
      </Typography>
      <div className={style.cardBlock}>
        {data.map((items, index) => (
          <ServiceCard
            cardData={items}
            key={index}
            index={index}
            activeIndex={activeIndex}
            handleClickActive={handleClickActive}
          />
        ))}
      </div>
    </div>
  );
};
