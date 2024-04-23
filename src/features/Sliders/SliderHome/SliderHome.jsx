import { Swiper, SwiperSlide } from "swiper/react";
import style from "./SliderHome.module.scss";
import "swiper/css";
import "swiper/css/bundle";
import { useRef, useState } from "react";
import { CustomButton, Typography } from "@/shared";
import { SliderNavbar } from "../view/SliderNavbar";
// import { useLoaderData } from "react-router-dom";

const slideContent = [
  {
    title: "Вместе к здоровью!",
    description: "Ваш надежный партнер - медицинский центр ЮРФА!",
    button_title: "Записаться на прием",
    image:
      "https://s3-alpha-sig.figma.com/img/15f0/004a/2c50472874be29d2e57b68e316a70f99?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfMO4sBZirgYdrcGHVRW8Xb3HVsqODZlBH51AX4hlg9AdAehs520RZYzd-X~dxS4sptJRtuajMYe7F5Jn8LawK5liNAZxNq9hBb~L5eoORpLBXDca2BeRicHK641KiL-BgUTt~Xp8q8mC2vIf0gqGvxeu2etYOWjiKr8zULheDtwKrGkrYln2H5~-hi6yavuysycmiH2VMIEScb3bf8QT96Go0DgSHK4JhaC06Dk3ZuVzvBli538UNsU8F~BB30P-IW81IKUCZu3JPUSCjArAdKsLbNQO013ET2iEnjazn5RRTbxlLO9SifHtxZecXk7E6Qh7wmrikoolV64P-E9Tw__",
  },
  {
    title: "Полная диагностика со скидкой -20%",
    description: "Мы делаем здоровье доступным и удобным для всех",
    button_title: "Диагностика",
    image:
      "https://s3-alpha-sig.figma.com/img/c722/ce2d/c18d3414dec9c5bb4a7620b9be646c03?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxLcK7SxiJYawsWw44OlYwUIGT-A0hvqpfZogX7Q1913G7dKQSjbDHiAOOrQXLZF8iVsEm4~gW8CyjIZxlc1ZbQ5joGiXRUEsariWnUuhi8uI0nApsfaTzPo5FefvvkItCPpKjNtRTd3CSZqaQEVKuwKt4QxWgQMeMNlfX-NBXWvcZ5JOwXOsSMr5wG2KSDtUBS67eIwWl8vRLFKNhxMc0-OoCMrwi6ApsnTsQLIRVlQEpZBakwiq-CZ8BrtSpnwNkhbPlLcXH51o7x~bric8ZaBoqJZo6qQMPaxWMHAyT3BC2ZR4L2j~3drp6mxF5CSNLr0vNxbesbbi2u4x-3fyQ__",
  },
  {
    title: "Лечение глаз и восстановление зрения",
    description: "С выгодой до -40%",
    button_title: "Подробнее",
    image:
      "https://s3-alpha-sig.figma.com/img/3f8f/e7f7/fbafe157c1ab5af5ec548c44415b2c97?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hFy8nzwyVsiAP-UBRkOdu98fEScsj8L-CYQpL7nukJUuS0PwGbx-WjDfw4B~Jenl10XGrzynxCUSWTGeP3Oz5M38-jDYSwkNUBTQ2ArVhFyzzg5e0ZRxDGMbtmLSkj9FsM9cEqbVMZZgAlRwAGAv4TFnoDJAqsEDVwKm63Bum94Hyg9hom6ZNtURo3Yeki6emJi~lb9UUjniEEvkbB2uInTkdvcC7tcA46YTj2o2YbO4NMSaXs9wvmk~j7gX1noH2m8T1Kyh31vmEgQNMFvyqYBSY2NHeQVZCfLjO0DuMhI8hj~8tGTuyV-L9VqmaQWOzRK~fr~en2TaLCaw~d6Lyg__",
  },
  {
    title: "Получите вакцину и защитите свой организм",
    description: "Во все дни недели с 8:00 до 14:00",
    button_title: "Подробнее",
    image:
      "https://s3-alpha-sig.figma.com/img/e2bd/5690/99137edd7fcd5a00a84ce086e059d777?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iR4LvZdHKZ0cT0-ryHkIvGDIItIBe~qfBrfVSiAUTJB3zydRVmll3wP0MN3AL1MNw18aTRC2I3~9~A8Pm10aAfv5XLKPhlxa3eWQgROGK6T6Rm3VMe~p6FQmFlGIg6zcTkOVCdQD7k~vQIenmt~Iuyjtff8bS0UAHOLLPa7UcDaq1xIpLXygyuwH22yIZFyh~xHp1SPcEfOCKq~MEl39CLw8ibc8~0x9ZzyExLY2rVTk-5~FAGJxbYXyfaFMQpAz5FiLRggGXNJwLt-c4zTo46WPl0~xPe5~Z7oN92T5fnewgDtWjkNM1HXkgxEqL-e5W3cRPaCe39Ja23sef867Sw__",
  },
  {
    title: "Самые лучшие специалисты",
    description:
      "Запишитесь на прием и получите полную консультацию у опытного врача",
    button_title: "Команда и руководство",
    image:
      "https://s3-alpha-sig.figma.com/img/ca67/1b8d/68ba2be45217204b5483dfea59bbe1c6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f-wpSi5iUaGIjHE5iXwKTzc2oGY0zPYm1L3Ij5kCVR5GRRYOSUMRohHG0ACkFUyz0n048HS-4bA9hyrnQwgVIeMMF6u7xSNc5rJ6zlRAQFpFDiXhXmNpjnfbWFTI4OOKvaRExk3fvz5LWLPJP6mgSzZfuki~DcE0BTeXVw3LkR0u0-waOR60j78oclWOTuYCApj3kF0sYuYmDYUDpV-~qc8I9q~y8ZL~ADDZ84Nt0tt7Qw5mpwHip0wRESXe2HE0uywShCjAw9DTKXpqY5eIXukEeeVL~W4KKchph~7N6CWbwG5uEl8H1fNUlWxYFDRBccCHP~ImZmS9WjVCwA4YrQ__",
  },
  {
    title: "Процедуры, на которые идут акции и скидки",
    description: "Перейдите на страницу чтобы узнать больше",
    button_title: "Акции и скидки",
    image:
      "https://s3-alpha-sig.figma.com/img/c63d/86ce/9f89700eb18704b4f05b2b038ba32cd0?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RFiO3Yr6cXa7VMCcczmrxThnfIGYFVh95PKTIS--nlIN1sYCChsBNt2OX3SwvFw7arqfze1FC53dEKPnpoY9Nlnw54aWOUkdB8roeLbpCGgTkzKnGTEKmnfy8IhiqLSNUmFX5IMfdbs5K6xp5qbhiSK22GIcPg-IXbHbSbNay7gkpswNJyaLh-e3zTK8t0bVfK~qvdL-TUbNwHNJn8KcvKDC6P~86ufCP-IYoyjdQRmLrzXwsTFBSMC1WBM0OX69YvuB2-knHTh--4GiL7ur-o1Dou32wrkbak9bM5bD2kJ0xr6vZfJQLtHpRiI9Ndz0s5vWKHMJajqZPpi3XYWOpA__",
  },
];

export const SliderHome = () => {
  // const { swiper } = useLoaderData();

  const swiperRef = useRef();
  console.log("render");
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
              <img src={item.image} alt="slider image" />
              <div className={style.shade}>
                <Typography
                  variant="h4"
                  className={style.header}
                  weight="semibold"
                  color="blue500"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="black400"
                  className={style.description}
                  weight="semibold"
                >
                  {item.description}
                </Typography>
                <CustomButton color="default">
                  <Typography variant="h9" color="white">
                    {item.button_title}
                  </Typography>
                </CustomButton>
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
