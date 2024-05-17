import {
  ArticleCard,
  Container,
  ReusedTextSection,
  Typography,
} from "@/shared";

import style from "./CharitySection.module.scss";
import { useLoaderData } from "react-router-dom";
import { PartnersFound } from "../PartnersFound";

const advantages = [
  {
    header: "Проект 'Здоровое Детство'",
    body: "Мы проводим бесплатные медицинские осмотры и вакцинации для детей из малообеспеченных семей. Цель проекта — обеспечение качественной медицинской помощи для каждого ребенка, независимо от финансового положения семьи.",
    image:
      "https://kartinki.pics/uploads/posts/2022-12/1671757802_kartinkin-net-p-krasivie-kvadratnie-kartinki-krasivo-21.jpg",
    id: 1,
  },
  {
    header: "Программа 'Поддержка пожилых'",
    body: "Ежегодно мы организуем бесплатные дни здоровья для пожилых людей, включающие консультации кардиологов, эндокринологов и других специалистов. Также мы предоставляем скидки на диагностику и лечение для пенсионеров.",
    image:
      "https://kartinki.pics/uploads/posts/2022-12/1671757865_kartinkin-net-p-krasivie-kvadratnie-kartinki-krasivo-20.jpg",
    id: 2,
  },
  {
    header: "Образовательный проект",
    body: "Мы проводим семинары и тренинги для врачей и медицинского персонала из регионов, обучая их современным методам диагностики и лечения. Это помогает повысить уровень медицинской помощи в сельских и удаленных районах.",
    image:
      "https://kartinki.pics/uploads/posts/2022-12/1671757802_kartinkin-net-p-krasivie-kvadratnie-kartinki-krasivo-21.jpg",
    id: 3,
  },
  {
    header: "Волонтерские программы",
    body: "Сотрудники клиники участвуют в различных волонтерских акциях, поддерживая местные благотворительные организации и помогая нуждающимся.",
    image:
      "https://kartinki.pics/uploads/posts/2022-12/1671757802_kartinkin-net-p-krasivie-kvadratnie-kartinki-krasivo-21.jpg",
    id: 4,
  },
  {
    body: "Мы верим, что вклад в благотворительность делает наше общество сильнее и здоровее. Присоединяйтесь к нам в наших инициативах и помогайте создавать лучшее будущее для всех. Клиника ЮРФА активно участвует в благотворительных проектах, стремясь помочь тем, кто нуждается в медицинской помощи.",
  },
  {
    header: "Как мы помогаем",
    body: "Финансовая поддержка: Выделение средств на лечение и реабилитацию нуждающихся пациентов.\r\nВолонтерская деятельность: Участие сотрудников клиники в благотворительных мероприятиях. Медицинские акции: Организация выездных медицинских осмотров в отдаленных районах. Мы верим, что вместе можем сделать мир лучше и здоровее. Присоединяйтесь к нашим благотворительным инициативам и помогайте тем, кто нуждается в заботе и поддержке.",
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
        {advantages?.map((advantage) => (
          <ReusedTextSection
            key={advantage.id}
            data={advantage}
            image={advantage.image}
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
            <ArticleCard
              {...card}
              id={`charity-more/${card.id}`}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
