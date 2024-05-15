import { PATHS } from "@/shared";
import phone from "@/shared/assets/icons/FooterIcons/phone.svg";
import inst from "@/shared/assets/icons/FooterIcons/inst.svg";
import fb from "@/shared/assets/icons/FooterIcons/fb.svg";
import wa from "@/shared/assets/icons/FooterIcons/wa.svg";

export const data = {
  icons: [fb, inst, phone, wa],
  nav: [
    {
      title: "Компания",
      links: [
        { name: "О компании", path: PATHS.about },
        { name: "Акции", path: PATHS.actual },
      ],
    },
    {
      title: "Карта сайта",
      links: [
        { name: "Услуги", path: PATHS.directions },
        { name: "FAQ", path: PATHS.FAQ },
      ],
    },
    {
      title: "Сотрудничество",
      links: [
        { name: "Вакансии", path: PATHS.vacancy },
        { name: "Врачам", path: PATHS.doctors },
      ],
    },
    {
      title: "Соц.сети",
      links: [
        { name: "Facebook", path: "https://www.facebook.com/" },
        { name: "Instagram", path: "https://www.instagram.com/" },
      ],
    },
    {
      title: "Контакты",
      links: [
        { name: "+996 703 52 52 07", path: "+996 703 52 52 07" },
        { name: "+996 703 52 52 07", path: "+996 703 52 52 07" },
        { name: "+996 703 52 52 07", path: "+996 703 52 52 07" },
        { name: "+996 703 52 52 07", path: "+996 703 52 52 07" },
      ],
    },
  ],
  policy: "footer.policy",
  disclamer: "footer.disclamer",
};
