import style from "./Doctors.module.scss";
import { Container, CustomButton, Typography } from "@/shared";
import { EventsSection, ArticleSection } from "@/widgets";
import db from "./OurTeam.json";
export const Doctors = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId); // Получаем элемент секции по его id
    if (section) {
      console.log("aa");
      section.scrollIntoView({ behavior: "smooth" }); // Прокручиваем к секции с плавным скроллингом
    }
  };

  return (
    <Container>
      <Typography variant="h3" weight="extraBold">
        {db.title}
      </Typography>
      <div className={style.buttonAnchor}>
        <CustomButton color="border" onClick={scrollToSection}>
          {db.buttonAnchor1}
        </CustomButton>
        <CustomButton
          color="default"
          onClick={() => scrollToSection("articles")}
        >
          {db.buttonAnchor2}
        </CustomButton>
        <CustomButton color="default" onClick={() => scrollToSection("events")}>
          {db.buttonAnchor3}
        </CustomButton>
      </div>
      <ArticleSection sectionId="articles" />
      <EventsSection sectionId="events" />
    </Container>
  );
};
