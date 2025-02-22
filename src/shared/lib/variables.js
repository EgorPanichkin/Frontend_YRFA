export const languages = [
  { title: "Русский", lang: "ru" },
  { title: "Кыргызча", lang: "kg" },
  { title: "English", lang: "en" },
];

export const PATHS = {
  home: "/",
  welcome: "/welcome",
  about: "/about",
  doctors: "/doctors",
  doctorsArticles: "/doctors/:type/:id",
  diognostic: "/diognostic",
  FAQ: "/FAQ",
  LOVZ: "/lovz",
  rehabilitation: "/rehabilitation",
  directions: "/directions",
  selectDirections: "/select-direction",
  currentService: "/current-service",
  analysis: "/analysis",
  selectAnalys: "/analysis/:id",
  login: "/login",
  registration: "/registration",
  registrationPhoneConfirmation: "/registration/phone-confirmation",
  smsVerification: "/login/sms-verification",
  verificationCode: "/login/sms-verification/verification",
  passwordReset: "/login/sms-verification/verification/password-reset",
  personal: "/personal-account",
  postHistory: "/personal-account/post-history",
  analysHistory: "/personal-account/analyses-history",
  personalReset: "/personal-account/personal-reset",
  actual: "/actual",
  news: "/news",
  newsArticle: "/news/blog-more/:id",
  vacancy: "/vacancy",
  vacancyDetails: "/vacancy/:id",
  charity: "/charity",
  charityMoreDetails: "/charity/charity-more/:id",
  search: "/search",
  searchService: "/search/search-service",
  notFound: "*",
};

export const navigationHeaderLinks = {
  main: {
    title: "header.nav.main.title",
    items: [
      { label: "header.nav.main.item1", path: PATHS.home },
      { label: "header.nav.main.item2", path: PATHS.about },
      { label: "header.nav.main.item3", path: PATHS.actual },
    ],
  },
  services: {
    title: "header.nav.services.title",
    items: [
      { label: "header.nav.services.item1", path: PATHS.directions },
      { label: "header.nav.services.item2", path: PATHS.analysis },
      { label: "header.nav.services.item3", path: PATHS.rehabilitation },
    ],
  },
  more: {
    title: "header.nav.more.title",
    items: [
      { label: "header.nav.more.item1", path: PATHS.doctors },
      { label: "header.nav.more.item2", path: PATHS.news },
      { label: "header.nav.more.item3", path: PATHS.LOVZ },
      { label: "header.nav.more.item4", path: PATHS.charity },
      { label: "header.nav.more.item5", path: PATHS.FAQ },
    ],
  },
};
