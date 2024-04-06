export const languages = [
  { title: "Русский", lang: "ru" },
  { title: "Кыргызча", lang: "kg" },
];

export const PATHS = {
  home: "/",
  welcome: "/welcome",
  about: "/about",
  ourTeam: "/our-team",
  diognostic: "diognostic",
  FAQ: "/FAQ",
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
  vacancy: "/vacancy",
  notFound: "*",
};

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
      { label: "Анализы", path: "/analysis" },
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
