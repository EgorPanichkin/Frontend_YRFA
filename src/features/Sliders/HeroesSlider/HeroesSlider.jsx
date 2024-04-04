import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import style from "./HeroesSlider.module.scss";
import { useRef, useState } from "react";
import { SliderNavbar } from "../view/SliderNavbar";

const slideContent = [
  {
    url: "https://s3-alpha-sig.figma.com/img/ddc6/c90a/dcb703a8ae4e6556fff27131fffc5bff?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfV1xV1n5ggizi5E30ivH3ED9g5MbECG1HkVZPF3JpCe8sSyLhLP2tqKUgqCVjuiRGixpnY41QEDyQ2St-M2eir5wnbt1e1GgZ7rL2-gE-x5s2FDUn9DoLM0T4qBIEsw90hS~YUInq8nK-O0V9q5KSr20YdcbGf6Dj0ReI~qDuXsMPVr~oFE8UKBQ-E9WUvh6udsHps28z-Prnj2btRnynYWVWi8btJjz4BSgYeUFCr-2hok-amUp4~bpMIdoOTyYG-XkheP0KzEJu11mp75kKBd9KVAQx26zwLzuVZV5FWGNjRuZ00PY4xuk9frVUbLpqWzwXgSTOZNpakA1UlBrw__",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/563e/da17/cc73330fa68a0a92ffbd0ddd59a5ef7d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bc03ZV53en~jCAcCpO-3bqP9Y4NMdOkqWCZ1TFoqhrjxtJWM1Ys8Fs~jX3xa9tZpdOAWUGLWvqcQScdaa6VAd5CU0kdlpFIkpHBUYqkUcHG9ohdbbJEs-nAIpBq11yOFdhHKwNkjz7xO-wxOggNCPVJtfJLta4S8-RdzUp36UWV-wM2hEYO9yy2AEJSu3CiNdFDGwBTXkJ0mhaD2B1KiTQiB8dVMz2qREro-kHiK7uWqvBexrS9yqjDPMStrJEISfZeauQUAgEClbiq34VtrAPmh9HB2someOEskCKnZucpXq620moax48AoDOzZ8fVzFLjSIaj4RCAQvWpWlqzcrA__",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/9795/448c/c0e67c0b9652f29ea98e2d6cf173dcb4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPg974CeJlYI0IXJJEgkXCbLVzffUC5QiT4sckzyQ7nehq7ILnMAGgkYx1vnU4JNs~i3SNlL-rjrdYNoRT4Z4rx6L0o-fQ6FZR~d2NrLEvX5qieAJAL3ovyMZMH5PmaY3QhBQJq9zZasobeFH-y4QjjO4FTyXKs8w9Lk7xVXq0V7H1cuL8M~juQ~4kN5q2u-iZvxzZkrbJZXzcfX5odiggfHu84QMynVIqVDthQKR5641taK1gyX650WV14kPlgD7W2KF-bB2-dV1HHFCTdTW~~dmQyLFVafoq5iu6YqA0-cfehN2JtkBsVvGSY9M3WMowcfONMLE58wEc8-LDIlug__",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/3359/ab81/8e652119d1a03e4159803d48d96fcd4d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TzmtbXFBmiquSzB01JJii3E1qnmQAtAMmA099qPklwbtT7lKa0K2OfCw7IS157uZV62I1~lZmPCobzi5Wf9mKAVOjZf893NHbRMWIypBRHBmO7qP6kw4NjfGlfoA4NTTyZgmxdlwWxufCGtwjDEPHJ~3l9FeiCFLsPK5iP019UjSfZCX1syYyeVuzTXpTuOE72VY0Ch3krKXAHF7cRQzkR0kAC-~DWK8p19xu7OjZx3RkGk8QF5b~YUzH3WdHvrDOSpzXb84m3mXDLoAUiKOWMKZeaP63M8d-aghuB9zLSD1NtV6VPji8me2Wz-95C0kmAWLodWrJCG7MWkm0AehIA__",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/a64f/c88b/1e1ea6d98471bf866176c329e1d0837f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HMEDiWYmiDav9C1jECWR8WCnFZCqAM5IoH0heC0Qcy-X9NvgDViUjo~NETWXsjzmnIM9EXMyDdnypRgpjY64M29cAnWpfaBpfo-LUE0EGLhu7pxx4Ky~nerOoHArQtbHG8Z7q9wQOgOgJcSB1BAlbtRoG3T0aiU0nDrSOYnMlE8-~u5XbYRAnQX~K9q5ve-RQ6M2nrk~1PmK-CCkV5U-ejWGk33CjYT5ntRzB~vd8F8g4TjtAlXV94ta8rBnDLN0~o0S5djDmLyjl3Zb7YmVmz-vbkMIo3I2c5saFR5ovYP05BqotAFHODfgSiAwOlwTBRKuXG1-KI~AerGUI8CWnA__",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/4430/a6b7/3d207566afd8d2b012315af36c08eb75?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HM-OYmyvvAnVBr0yEEKvt62qpHQVco0jU-ugkVgOsZVBfAbTeKe~cK9bBCOTJuZKyiFS3ysPlJmBB6Dmb1zAMH73hA3Bhx9220aafuqOq0iP0ujTnqwK7ssidE-r-6Yy4gMFtNWw~WteF3TGek9ks8nGh9p1ITtfiCVEanaV40m6ScaLZL-VCVNLNx-bxbyjsJEjtk94HFEMvpxu4NWnvHrOt5JTeXbiOSgt1JGIbW3HoaXtEtV7NibvHvwok4~gs01mzAGtv-Fm36agQARfm6ZlRmgLGN~U-Y-Rpas-mEx5ryVJy5hdqyzIyZ21PfjK5RrVzivc2qva17qzhAKf9Q__",
  },
];

export const HeroesSlider = () => {
  const swiperRef = useRef();
  const [active, setActive] = useState();
  console.log("render");
  return (
    <div className={style.sliderWrapper}>
      <Swiper
        id={style.slider}
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        initialSlide={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
        allowTouchMove={false}
      >
        {slideContent.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.url} alt="slide image" />
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
