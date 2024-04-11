import style from "./Doctors.module.scss";
import { useState } from "react";
import { Container, CustomButton, Typography } from "@/shared";
import { EventsSection, ArticleSection } from "@/widgets";
import db from "./OurTeam.json";
export const Doctors = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [dataCountArticles, setDataCountArticles] = useState(0);
  const [dataCountEvents, setDataCountEvents] = useState(0);

  const handleDataCountEvents = (count) => {
    setDataCountEvents(count);
  };

  const handleDataCountArticles = (count) => {
    setDataCountArticles(count);
  };

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
            color="filter"
            onClick={showAllResults}
            className={activeSection === null ? style.active : ""}
          >
            {db.buttonAnchor1}
          </CustomButton>
          <CustomButton
            color="filter"
            onClick={() => toggleSection("articles")}
            className={activeSection === "articles" ? style.active : ""}
          >
            {db.buttonAnchor2}
            <div className={style.countData}>{dataCountArticles}</div>
          </CustomButton>
          <CustomButton
            color="filter"
            onClick={() => toggleSection("events")}
            className={activeSection === "events" ? style.active : ""}
          >
            {db.buttonAnchor3}
            <div className={style.countData}>{dataCountEvents}</div>
          </CustomButton>
        </div>
        {activeSection === "articles" && (
          <ArticleSection onDataCount={handleDataCountArticles} />
        )}
        {activeSection === "events" && (
          <EventsSection onDataCount={handleDataCountEvents} />
        )}
        {activeSection === null && (
          <div>
            <ArticleSection onDataCount={handleDataCountArticles} />
            <EventsSection onDataCount={handleDataCountEvents} />
          </div>
        )}
      </div>
    </Container>
  );
};
