import { PATHS } from "@/shared";

export const data = {
  list1: {
    title: "Соц. Сети",
  },
  list2: {
    title: "О Компании",
    items: [{ text: "Акции", path: PATHS.actual }],
  },
  list3: {
    title: "Карта сайта",
    items: [
      { text: "Услуги", path: PATHS.directions },
      { text: "Наши преимущества", path: PATHS.about },
      { text: "FAQ", path: PATHS.FAQ },
    ],
  },
  list4: {
    title: "Партнерам",
    items: [
      { text: "Вакансии", path: PATHS.vacancy },
      { text: "Врачам", path: PATHS.doctors },
    ],
  },
  list5: {
    title: "Контакты",
  },
  policy: "Политика конфеденциальности",
  disclamer:
    "Все материалы сайта защищены авторским правом, их использование возможно только с письменного согласия правообладателя, а информация на сайте носит исключительно информационный и образовательный характер, не являясь медицинской рекомендацией",
};
