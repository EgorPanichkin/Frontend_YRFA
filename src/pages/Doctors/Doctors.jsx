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
            className={activeSection === null ? "active" : ""}
          >
            {db.buttonAnchor1}
          </CustomButton>
          <CustomButton
            color="filter"
            onClick={() => toggleSection("articles")}
          >
            {db.buttonAnchor2}
            <span className={style.countData}>{dataCountArticles}</span>
          </CustomButton>
          <CustomButton color="filter" onClick={() => toggleSection("events")}>
            {db.buttonAnchor3}
            <span className={style.countData}>{dataCountEvents}</span>
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
