import { useEffect, useState } from "react";
import style from "./SearchSrvices.module.scss";
import { MoreButton, PATHS, Typography } from "@/shared";
import { Link, useLocation } from "react-router-dom";

export const SearchServices = (props) => {
  const { data, dataCount } = props;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("q");

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
          <Link
            key={index}
            to={`${PATHS.searchService}/${item.id}?q=${searchQuery}`}
          >
            <div className={style.cardServices}>
              <Typography variant="h6" weight="bold">
                {item.title}
              </Typography>
              <Typography color="light" truncate={150}>
                {item.main_description}
              </Typography>
            </div>
          </Link>
        ))}
      </div>
      {data.length > visibleCount && <MoreButton onClick={handleShowMore} />}
    </div>
  );
};
