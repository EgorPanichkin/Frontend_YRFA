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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_JlSBVpmC8TcaxsGbAOpGV9VfbwCScLZwQ&usqp=CAU"
        alt="img-card-service"
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
