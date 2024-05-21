import { ArticleCard, Container, ReusedTextSection, Typography } from "@/shared";

import style from "./CharitySection.module.scss";
import { useLoaderData } from "react-router-dom";
import { PartnersFound } from "../PartnersFound";

import img1 from "@shared/assets/images/charity.webp";
import img2 from "@shared/assets/images/charity/hends.webp";
import img3 from "@shared/assets/images/charity/school.webp";
import img4 from "@shared/assets/images/charity/district.webp";
import img5 from "@shared/assets/images/charity/sky.webp";
import img6 from "@shared/assets/images/charity/picture.webp";

const images = [img1, img2, img3, img4, img5, img6];

const advantages = [
  {
    header: "Проект 'Здоровое Детство'",
    body: "Мы проводим бесплатные медицинские осмотры и вакцинации для детей из малообеспеченных семей. Цель проекта — обеспечение качественной медицинской помощи для каждого ребенка, независимо от финансового положения семьи.",
    id: 1,
  },
  {
    header: "Программа 'Поддержка пожилых'",
    body: "Ежегодно мы организуем бесплатные дни здоровья для пожилых людей, включающие консультации кардиологов, эндокринологов и других специалистов. Также мы предоставляем скидки на диагностику и лечение для пенсионеров.",
    id: 2,
  },
  {
    header: "Образовательный проект",
    body: "Мы проводим семинары и тренинги для врачей и медицинского персонала из регионов, обучая их современным методам диагностики и лечения. Это помогает повысить уровень медицинской помощи в сельских и удаленных районах.",
    id: 3,
  },
  {
    header: "Волонтерские программы",
    body: "Сотрудники клиники участвуют в различных волонтерских акциях, поддерживая местные благотворительные организации и помогая нуждающимся.",
    id: 4,
  },
  {
    id: 5,
    body: "Мы верим, что вклад в благотворительность делает наше общество сильнее и здоровее. Присоединяйтесь к нам в наших инициативах и помогайте создавать лучшее будущее для всех. Клиника ЮРФА активно участвует в благотворительных проектах, стремясь помочь тем, кто нуждается в медицинской помощи.",
  },
  {
    id: 6,
    header: "Как мы помогаем",
    list: [
      {
        description: "Финансовая поддержка",
        body: "Выделение средств на лечение и реабилитацию нуждающихся пациентов.",
      },
      {
        description: "Волонтерская деятельность",
        body: "Участие сотрудников клиники в благотворительных мероприятиях.",
      },
      {
        description: "Медицинские акции",
        body: "Организация выездных медицинских осмотров в отдаленных районах.",
      },
    ],
  },
];

export const CharitySection = () => {
  const { article, fund } = useLoaderData();

  return (
    <Container>
      <Typography variant="h3" weight="bold" className={style.projectTitle}>
        Проекты
      </Typography>
      <div className={style.reusedTextSectionWrapper}>
        {advantages?.map((advantage, index) => (
          <ReusedTextSection
            key={advantage.id}
            data={advantage}
            image={images[index]}
            reverse={advantage.id % 2 ? true : false}
          />
        ))}
      </div>
      <PartnersFound title="Фонды" data={fund} />
      <div className={style.newsBlock}>
        <Typography className={style.newsBlockTitle} variant="h3" weight="bold">
          Статьи
        </Typography>
        <div className={style.cardsWrapper}>
          {article?.map((card) => (
            <ArticleCard {...card} id={`charity-more/${card.id}`} key={card.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};
