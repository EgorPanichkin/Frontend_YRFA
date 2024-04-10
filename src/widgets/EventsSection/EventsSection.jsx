import style from "./EventsSection.module.scss";
import { useState, useEffect } from "react";
import { Typography, baseGetRequest } from "@/shared";
import { DoctorsCard } from "..";

export const EventsSection = ({ sectionId }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const response = async () => {
      const dataBase = await baseGetRequest("/blogs/events/");
      console.log(dataBase);
      setData(dataBase);
    };
    response();
  }, []);
  const title = "Мероприятия";
  return (
    <div id={sectionId} className={style.eventsSection}>
      <Typography variant="h4" weight="semibold">
        {title}
      </Typography>
      <div className={style.flex}>
        {data.map((items) => (
          <DoctorsCard key={items.id} data={items} />
        ))}
      </div>
    </div>
  );
};
