import style from "./EventsSection.module.scss";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  ArticleCard,
  ChevronDownIcon,
  CustomButton,
  Loader,
  Typography,
} from "@/shared";

export const EventsSection = ({ sectionId, onDataCount }) => {
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();
  useEffect(() => {
    setLoading(false);
    onDataCount(data.events.length);
  }, [data.events, onDataCount]);
  return (
    <div id={sectionId} className={style.eventsSection}>
      <Typography variant="h3" weight="bold">
        Мероприятия
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={style.flex}>
            {data.events.map((item) => (
              <ArticleCard
                image={item.image}
                title={item.title}
                mainDescription={item.main_description}
                pubDate={item.pub_date}
                id={item.id}
                key={item.id}
              />
            ))}
          </div>
          <CustomButton variant="neutral" className={style.btn}>
            Ещё <ChevronDownIcon />
          </CustomButton>
        </>
      )}
    </div>
  );
};
