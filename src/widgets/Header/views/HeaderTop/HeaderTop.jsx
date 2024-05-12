import { Container, PhoneIcon, SearchInput, Typography } from "@/shared";
import style from "./HeaderTop.module.scss";
import { LanguageSelector } from "../../models/LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";

export const HeaderTop = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className={style.headerTop}>
        <div className={style.headerTopBlock}>
          <div className={style.item}>
            <LanguageSelector />
          </div>
          <div className={style.item}>
            <PhoneIcon color="#6F6F6F" />
            <Typography variant="bodySmall" color="black400">
              {t("header.info")}{" "}
              <a href="tel:1225" className={style.phoneLink}>
                1225
              </a>
            </Typography>
          </div>
        </div>
        <div className={style.search}>
          <SearchInput />
        </div>
      </div>
    </Container>
  );
};
