import style from "./EventsSection.module.scss";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  ArticleCard,
  ChevronDownIcon,
  CustomButton,
  Typography,
  baseGetRequest,
} from "@/shared";

export const EventsSection = ({ sectionId, onDataCount }) => {
  const responseResult = useLoaderData();
  const [data, setData] = useState(responseResult.events.results);
  const [next, setNext] = useState(responseResult.events.next);

  useEffect(() => {
    onDataCount(responseResult.events.count);
  }, [responseResult, onDataCount]);

  const handleMore = async () => {
    const response = await baseGetRequest(next);
    setData([...data, ...response.results]);
    setNext(response.next);
  };

  return (
    <div id={sectionId} className={style.eventsSection}>
      <Typography variant="h3" weight="bold">
        Мероприятия
      </Typography>
      <div className={style.flex}>
        {data.map((item) => (
          <ArticleCard
            image={item.image}
            title={item.title}
            mainDescription={item.main_description}
            pubDate={item.pub_date}
            id={`events/${item.id}`}
            key={item.id}
          />
        ))}
      </div>
      {next && (
        <CustomButton
          onClick={handleMore}
          variant="neutral"
          className={style.btn}
        >
          Ещё <ChevronDownIcon />
        </CustomButton>
      )}
    </div>
  );
};
