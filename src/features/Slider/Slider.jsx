import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/bundle";
import { useRef, useState } from "react";
import { CustomButton, Typography } from "@/shared";
import { SliderNavbar } from "./view/SliderNavbar";
import { useLoaderData } from "react-router-dom";

export const Slider = () => {
  const { swiper } = useLoaderData();

  const swiperRef = useRef(null);
  const [active, setActive] = useState();

  return (
    <div className={style.sliderWrapper}>
      <Swiper
        id={style.slider}
        slidesPerView={1}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        initialSlide={1}
        loop={true}
      >
        {swiper.map((item, index) => {
          return (
            <SwiperSlide key={index} id={style.slide}>
              <div className={style.imageWrapper}>
                <img src={item.image} alt="image" />
              </div>
              <div className={style.text}>
                <Typography variant="h5" weight="bold">
                  {item.title}
                </Typography>
                <Typography color="light" className={style.title} truncate={65}>
                  {item.description}
                </Typography>
                <CustomButton size="small" className={style.button}>
                  {item.button_title}
                </CustomButton>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderNavbar
        content={swiper}
        active={active}
        slider={swiperRef}
        className={style.navbar}
      />
    </div>
  );
};
