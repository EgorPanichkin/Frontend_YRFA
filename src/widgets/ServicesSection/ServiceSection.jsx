import { selectLocation } from "@/app/store/locationSlice";
import style from "./ServiceSection.module.scss";
import { ServiceListCard, Typography } from "@/shared";
import { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";

export const ServiceSection = () => {
  const { popular } = useLoaderData();
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownRef = useRef(null);

  const regions = useSelector(selectLocation);
  const selectedCity = regions.filter(
    (region) => region.id === Number(localStorage.getItem("location")),
  );

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

  const dataTitle = `Услуги города ${selectedCity[0]?.title}`;

  return (
    <div className={style.servicesBlock} ref={dropdownRef}>
      <Typography variant="h3" weight="bold">
        {dataTitle}
      </Typography>
      <div className={style.cardBlock}>
        {popular?.map((item, index) => (
          <ServiceListCard
            image={item.image}
            title={item.title}
            categoryList={item.diagnostic_popular}
            key={index}
            activeIndex={activeIndex}
            handleClickActive={handleClickActive}
          />
        ))}
      </div>
    </div>
  );
};
