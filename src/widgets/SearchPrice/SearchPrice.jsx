import style from "./SearchPrice.module.scss";
import { useState, useEffect } from "react";
import { Typography, MoreButton, CustomButton } from "@/shared";

const capitalizeFirstLetter = (string) => {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const SearchPrice = (props) => {
  const { data, dataCount } = props;
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  useEffect(() => {
    dataCount(data.length);
  }, [data, dataCount]);

  console.log(data);

  return (
    <div className={style.priceBlock}>
      <Typography variant="h3" weight="bold">
        Цены
      </Typography>
      <div className={style.cardBlock}>
        {data.slice(0, visibleCount).map((item) => {
          const capitalizedText = capitalizeFirstLetter(item.title);
          return (
            <div key={item.id} className={style.priceCard}>
              <div className={style.titleCard}>
                <Typography weight="bold">{capitalizedText}</Typography>
                <Typography variant="h4" weight="bold" color="primary">
                  {item.price}
                </Typography>
              </div>
              <CustomButton className={style.btnPrice}>Записаться</CustomButton>
            </div>
          );
        })}
      </div>
      {data.length > visibleCount && <MoreButton onClick={handleShowMore} />}
    </div>
  );
};
