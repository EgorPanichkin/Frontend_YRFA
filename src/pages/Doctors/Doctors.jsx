import style from "./Doctors.module.scss";
import { useState } from "react";
import { Container, CustomButton, Typography } from "@/shared";
import { EventsSection, ArticleSection } from "@/widgets";
import db from "./OurTeam.json";
export const Doctors = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const showAllResults = () => {
    setActiveSection(null);
  };

  return (
    <Container>
      <div className={style.doctorsPages}>
        <Typography variant="h3" weight="extraBold">
          {db.title}
        </Typography>
        <div className={style.buttonAnchor}>
          <CustomButton
            color="border"
            onClick={showAllResults}
            className={activeSection === null ? "active" : ""}
          >
            {db.buttonAnchor1}
          </CustomButton>
          <CustomButton
            color="default"
            onClick={() => toggleSection("articles")}
          >
            {db.buttonAnchor2}
          </CustomButton>
          <CustomButton color="default" onClick={() => toggleSection("events")}>
            {db.buttonAnchor3}
          </CustomButton>
        </div>
        {activeSection === "articles" && <ArticleSection />}
        {activeSection === "events" && <EventsSection />}
        {activeSection === null && (
          <div>
            <ArticleSection />
            <EventsSection />
          </div>
        )}
      </div>
    </Container>
  );
};
