import { useEffect, useState } from "react";
import style from "./SearchSrvices.module.scss";
import { MoreButton, Typography } from "@/shared";

export const SearchServices = (props) => {
  const { data, dataCount } = props;

  const [visibleCount, setVisibleCount] = useState(6);
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  useEffect(() => {
    dataCount(data.length);
  }, [data, dataCount]);

  return (
    <div className={style.blockServices}>
      <Typography variant="h3" weight="bold">
        Услуги
      </Typography>
      <div className={style.servicesCard}>
        {data.slice(0, visibleCount).map((item, index) => (
          <div className={style.cardServices} key={index}>
            <Typography variant="h6" weight="bold">
              {item.title}
            </Typography>
            <Typography color="light" truncate={150}>
              {item.main_description}
            </Typography>
          </div>
        ))}
      </div>
      {data.length > visibleCount && <MoreButton onClick={handleShowMore} />}
    </div>
  );
};
