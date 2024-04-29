import { Typography } from "@/shared";
import style from "./Partners.module.scss";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

export const Partners = () => {
  const { partners } = useLoaderData();
  return (
    <>
      <Typography variant="h2" weight="extraBold">
        Партнеры
      </Typography>
      <div className={style.wrapper}>
        <div className="partners">
          <Swiper
            modules={[Scrollbar]}
            spaceBetween={50}
            slidesPerView={5.6}
            scrollbar={{ draggable: true }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <a href="#" className={style.link}>
                  <img
                    className={style.image}
                    src={partner.imageUrl}
                    alt="Партнер"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
