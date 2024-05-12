import style from "./SearchPrice.module.scss";
import { useState, useEffect } from "react";
import { Typography, MoreButton, CustomButton } from "@/shared";

export const SearchPrice = (props) => {
  const { data, dataCount } = props;

  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  useEffect(() => {
    dataCount(data.length);
  }, [data, dataCount]);
  return (
    <div className={style.priceBlock}>
      <Typography variant="h3" weight="bold">
        Цены
      </Typography>
      <div className={style.cardBlock}>
        {data.slice(0, visibleCount).map((item) => (
          <div key={item.id} className={style.priceCard}>
            <div className={style.titleCard}>
              <Typography weight="bold">{item.title}</Typography>
              <Typography variant="h4" weight="bold" color="primary">
                {item.price}
              </Typography>
            </div>
            <CustomButton className={style.btnPrice}>Записаться</CustomButton>
          </div>
        ))}
      </div>
      {data.length > visibleCount && <MoreButton onClick={handleShowMore} />}
    </div>
  );
};
