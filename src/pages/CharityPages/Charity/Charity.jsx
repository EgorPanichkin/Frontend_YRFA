import { CharitySection, ReusedHero } from "@/widgets";
import style from "./Charity.module.scss";

export const Charity = () => {
  return (
    <>
      <ReusedHero
        className={style.reusedHero}
        title="Базовый вектор развития станет частью наших традиций"
        body="Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта и по сей день остаются уделом либералов, которые жаждут быть ассоциативно распределены по отраслям."
        textButton="Записаться онлайн"
        img="https://s3-alpha-sig.figma.com/img/bac8/1d26/31eeadace6846d12c7653954145e8402?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7mx7NFpvTUENqUIq78sGbH8alMrt12i8oDnBzgwRkfVAQ2jMv57GdaeeNz0FJMvPCWYbcYXo66hcxMHjEIAZ5-byyEoSrIkp-cgqiAPBiXKWiBrzmq4aK1~3eshbL05wKvWuD4F4pW92sb6q~NcUNpy2CP3fxcuO-y1EftfRjie90zMYWHjh2-3k1KQSBPvL8lwifyHTFOreYNJNzF0aalEaQEc~817fwF-Vd3c5rJGLEi0RVQbFgUVEwVcUUX0dQ0Oqlj4OEpp8yo8NnhtL4kFeeURfeYS4CKwBButf02yFaxbRaTURscHAmtzqnGHfRmqVL9xfXMSbQIUNrK6vQ__"
      />
      <CharitySection />
    </>
  );
};
