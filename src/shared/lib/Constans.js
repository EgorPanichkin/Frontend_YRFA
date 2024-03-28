export const languages = [
  [
    { title: "Русский", lang: "ru" },
    { title: "Кыргызча", lang: "kg" },
    { title: "English", lang: "en" },
  ],
];

export const navigationHeaderLinks = {
  main: {
    title: "Главная",
    items: [
      { label: "Главная", path: "/" },
      { label: "О компании", path: "/about" },
      { label: "Акции", path: "/actual" },
    ],
  },
  services: {
    title: "Услуги",
    items: [
      { label: "Направления", path: "/directions" },
      { label: "Анализы", path: "/analysis-selector" },
      { label: "Реабилитация", path: "/rehabilitation" },
    ],
  },
  more: {
    title: "Еще",
    items: [
      { label: "Врачам", path: "/doctors" },
      { label: "Блог", path: "/news" },
      { label: "Инфо для инвалидов, пенсионеров, ВОЗ и др.", path: "/" },
      { label: "Благотворительность", path: "/blagotvoritelnost" },
      { label: "Часто задаваемые вопросы", path: "/FAQ" },
    ],
  },
};
