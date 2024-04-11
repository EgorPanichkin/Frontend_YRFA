export const languages = [
  { title: "Русский", lang: "ru" },
  { title: "Кыргызча", lang: "kg" },
];

export const PATHS = {
  home: "/",
  welcome: "/welcome",
  about: "/about",
  doctors: "/doctors",
  doctorsArticles: "/doctors/:type/:slug",
  diognostic: "diognostic",
  FAQ: "/FAQ",
  LOVZ: "/lovz",
  rehabilitation: "/rehabilitation",
  directions: "/directions",
  analysis: "/analysis",
  selectAnalys: "/analysis/:id",
  login: "/login",
  registration: "/registration",
  smsVerification: "/login/sms-verification",
  verificationCode: "/login/sms-verification/verification",
  passwordReset: "/login/sms-verification/verification/password-reset",
  personal: "/personal-account",
  postHistory: "/personal-account/post-history",
  analysHistory: "personal-account/analyses-history",
  actual: "/actual",
  news: "/news",
  newsArticle: "/news/:slug",
  vacancy: "/vacancy",
  notFound: "*",
};

export const navigationHeaderLinks = {
  main: {
    title: "Главная",
    items: [
      { label: "Главная", path: PATHS.home },
      { label: "О компании", path: PATHS.about },
      { label: "Акции", path: PATHS.actual },
    ],
  },
  services: {
    title: "Услуги",
    items: [
      { label: "Направления", path: PATHS.directions },
      { label: "Анализы", path: PATHS.analysis },
      { label: "Реабилитация", path: PATHS.rehabilitation },
    ],
  },
  more: {
    title: "Еще",
    items: [
      { label: "Врачам", path: PATHS.doctors },
      { label: "Блог", path: PATHS.news },
      { label: "Инфо для инвалидов, пенсионеров, ВОЗ и др.", path: PATHS.LOVZ },
      { label: "Благотворительность", path: "/blagotvoritelnost" },
      { label: "Часто задаваемые вопросы", path: PATHS.FAQ },
    ],
  },
};
