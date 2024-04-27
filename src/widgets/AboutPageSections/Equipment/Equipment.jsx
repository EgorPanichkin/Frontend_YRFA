import { EquipCard, Typography } from "@/shared";
import style from "./Equipment.module.scss";
import { useLoaderData } from "react-router-dom";

export const Equipment = () => {
  const { equipment } = useLoaderData();

  return (
    <>
      <Typography variant="h2" weight="extraBold">
        Оснащение
      </Typography>
      <div className={style.wrapper + " equipment"}>
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={50}
          slidesPerView={3.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          scrollbar={{ draggable: true }}
        >
          {equipment.map((item) => (
            <SwiperSlide key={item.id}>
              <EquipCard
                title={item.title}
                text={item.text}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
