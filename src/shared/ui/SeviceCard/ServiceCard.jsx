import style from "./ServiceCard.module.scss";
import { DropMenuServices, PolygonIcon, Typography } from "@/shared";

export const ServiceCard = ({
  cardData,
  index,
  activeIndex,
  handleClickActive,
}) => {
  return (
    <div className={style.cardBlock} onClick={() => handleClickActive(index)}>
      <img
        src={cardData.image}
        alt={cardData.title}
        className={style.cardImg}
      />
      <div className={style.title}>
        <Typography variant="h6" weight="semibold" color="white">
          {cardData.title}
        </Typography>
        <PolygonIcon activeIndex={activeIndex === index} />
      </div>
      <DropMenuServices
        activeIndex={activeIndex === index}
        data={cardData.diagnostic_popular}
      />
    </div>
  );
};
