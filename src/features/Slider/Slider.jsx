import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/bundle";
import { useRef, useState } from "react";
import { CustomButton, ModalWrapper, Typography } from "@/shared";
import { SliderNavbar } from "./view/SliderNavbar/SliderNavbar";
import { useLoaderData } from "react-router-dom";
import { ModalWindow } from "./view/ModalWindow/ModalWindow";

export const Slider = () => {
  const { swiper } = useLoaderData();

  const swiperRef = useRef(null);
  const button = useRef(null);
  const [active, setActive] = useState();
  const [modalIsActive, setModalIsActive] = useState(false);

  return (
    <>
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
              <SwiperSlide
                key={index}
                id={style.slide}
                onClick={(e) => {
                  e.target !== button.current && setModalIsActive(true);
                }}
              >
                <div className={style.imageWrapper}>
                  <img src={item.image} alt="image" />
                </div>
                <div className={style.text}>
                  <Typography variant="h5" weight="bold">
                    {item.title}
                  </Typography>
                  <Typography
                    color="light"
                    className={style.title}
                    truncate={65}
                  >
                    {item.description}
                  </Typography>
                  <CustomButton
                    reference={button}
                    link={item.url}
                    size="small"
                    className={style.button}
                  >
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
      {modalIsActive && (
        <ModalWrapper onCloseModal={() => setModalIsActive(false)}>
          <ModalWindow
            onClose={setModalIsActive}
            title={swiper[active].title}
            description={swiper[active].description}
            imgSrc={swiper[active].image}
            path={swiper[active].url}
            buttonText={swiper[active].button_title}
          />
        </ModalWrapper>
      )}
    </>
  );
};
