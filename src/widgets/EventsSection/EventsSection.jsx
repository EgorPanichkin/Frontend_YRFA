import style from "./EventsSection.module.scss";
import { useState, useEffect } from "react";
import { Loader, Typography, baseGetRequest } from "@/shared";
import { DoctorsCard } from "..";

export const EventsSection = ({ sectionId, onDataCount }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const response = async () => {
      const dataBase = await baseGetRequest("/blogs/events/");
      setData(dataBase);
      onDataCount(dataBase.length);
      setLoading(false);
    };
    response();
  }, [onDataCount]);
  const title = "Мероприятия";
  return (
    <div id={sectionId} className={style.eventsSection}>
      <Typography variant="h4" weight="semibold">
        {title}
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.flex}>
          {data.map((items) => (
            <DoctorsCard
              key={items.id}
              data={items}
              link={`events/${items.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
