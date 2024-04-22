import style from "./LogoCarusel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Typography } from "@/shared";

export const LogoCarusel = (props) => {
  const { title, logoList, className } = props;

  return (
    <div className={className}>
      <Typography className={style.logoCaruselTitle} variant="h2" weight="800">
        {title}
      </Typography>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        freeMode={true}
        scrollbar={{
          hide: false,
        }}
        initialSlide={0}
        modules={[FreeMode, Scrollbar]}
      >
        {logoList?.map((item, index) => (
          <SwiperSlide key={index} className={style.logoSlider}>
            {item.logo}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
