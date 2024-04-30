import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/bundle";
import { useRef, useState } from "react";
import { CustomButton, Typography } from "@/shared";
import { SliderNavbar } from "./view/SliderNavbar";
// import { useLoaderData } from "react-router-dom";

const slideContent = [
  {
    title: "Вместе к здоровью!",
    description: "Ваш надежный партнер - медицинский центр ЮРФА!",
    button_title: "Записаться на прием",
    image:
      "https://kartinki.pics/uploads/posts/2022-12/1671757822_kartinkin-net-p-krasivie-kvadratnie-kartinki-krasivo-4.jpg",
  },
  {
    title: "Полная диагностика со скидкой -20%",
    description: "Мы делаем здоровье доступным и удобным для всех",
    button_title: "Диагностика",
    image:
      "https://kartinki.pics/uploads/posts/2022-12/1671757847_kartinkin-net-p-krasivie-kvadratnie-kartinki-krasivo-6.jpg",
  },
  {
    title: "Лечение глаз и восстановление зрения",
    description: "С выгодой до -40%",
    button_title: "Подробнее",
    image:
      "https://kartinki.pics/uploads/posts/2022-12/1671757791_kartinkin-net-p-krasivie-kvadratnie-kartinki-krasivo-7.jpg",
  },
  {
    title: "Получите вакцину и защитите свой организм",
    description: "Во все дни недели с 8:00 до 14:00",
    button_title: "Подробнее",
    image:
      "https://kartinki.pics/uploads/posts/2022-12/1671757779_kartinkin-net-p-krasivie-kvadratnie-kartinki-krasivo-8.jpg",
  },
  {
    title: "Самые лучшие специалисты",
    description:
      "Запишитесь на прием и получите полную консультацию у опытного врача",
    button_title: "Команда и руководство",
    image:
      "https://kartinki.pics/uploads/posts/2022-12/1671757838_kartinkin-net-p-krasivie-kvadratnie-kartinki-krasivo-9.jpg",
  },
  {
    title: "Процедуры, на которые идут акции и скидки",
    description: "Перейдите на страницу чтобы узнать больше",
    button_title: "Акции и скидки",
    image:
      "https://kartinki.pics/uploads/posts/2022-12/1671757779_kartinkin-net-p-krasivie-kvadratnie-kartinki-krasivo-10.jpg",
  },
];

export const Slider = () => {
  // const { swiper } = useLoaderData();

  const swiperRef = useRef();
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
        {slideContent.map((item, index) => {
          return (
            <SwiperSlide key={index} id={style.slide}>
              <div className={style.imageWrapper}>
                <img src={item.image} alt="image" />
              </div>
              <div className={style.text}>
                <Typography variant="h5" weight="bold">
                  {item.title}
                </Typography>
                <Typography color="light" className={style.title}>
                  {item.description}
                </Typography>
                <CustomButton size="small">{item.button_title}</CustomButton>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderNavbar
        content={slideContent}
        active={active}
        slider={swiperRef}
        className={style.navbar}
      />
    </div>
  );
};
