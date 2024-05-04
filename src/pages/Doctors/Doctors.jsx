import style from "./Doctors.module.scss";
import { useState } from "react";
import { Container, TabSelectButton, Typography } from "@/shared";
import { EventsSection, ArticleSection } from "@/widgets";
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
        <Typography variant="h2" weight="bold">
          Врачам
        </Typography>
        <div className={style.buttonAnchor}>
          <TabSelectButton
            onClick={showAllResults}
            active={activeSection === null ? true : false}
          >
            Все результаты
          </TabSelectButton>
          <TabSelectButton
            onClick={() => toggleSection("articles")}
            count={dataCountArticles}
            active={activeSection === "articles" ? true : false}
          >
            Статьи
          </TabSelectButton>
          <TabSelectButton
            onClick={() => toggleSection("events")}
            count={dataCountEvents}
            active={activeSection === "events" ? true : false}
          >
            Мероприятия
          </TabSelectButton>
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
