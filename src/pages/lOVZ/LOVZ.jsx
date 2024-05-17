import { BodyLovz, ReusedHero } from "@/widgets";
import img from "@/shared/assets/images/lovz/mainImage.webp";

export const LovzPage = () => {
  return (
    <>
      <ReusedHero
        textButton="Записаться онлайн"
        title="Лицам с ограниченными возможностями здоровья"
        body="В клинике ЮРФА мы стремимся обеспечить высокий уровень медицинского обслуживания для людей с ограниченными возможностями здоровья (ЛОВЗ)"
        img={img}
      />
      <BodyLovz />
    </>
  );
};
