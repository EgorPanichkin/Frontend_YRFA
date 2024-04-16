import style from "./EventsSection.module.scss";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Loader, Typography } from "@/shared";
import { DoctorsCard } from "..";

export const EventsSection = ({ sectionId, onDataCount }) => {
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();
  useEffect(() => {
    setLoading(false);
    console.log(data.events);
    onDataCount(data.events.length);
  }, [data.events, onDataCount]);
  return (
    <div id={sectionId} className={style.eventsSection}>
      <Typography variant="h4" weight="semibold">
        Мероприятия
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.flex}>
          {data.events.map((items) => (
            <DoctorsCard
              key={items.id}
              {...items}
              link={`events/${items.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
