import { Container, CustomButton, Logo, navigationHeaderLinks } from "@/shared";
import style from "./HeaderBottom.module.scss";
import { Link } from "react-router-dom";
import { DropdownHeaderMenu } from "../../models/DropdownHeaderMenu/DropdownHeaderMenu";
import { LocationSelector } from "../../models/LocationSelector";
import { useTranslation } from "react-i18next";

export const HeaderBottom = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className={style.navigation}>
        <Link to="/" className={style.logoLink}>
          <Logo className={style.logo} />
        </Link>
        <nav>
          <div className={style.main}>
            <DropdownHeaderMenu
              items={navigationHeaderLinks.main.items}
              title={navigationHeaderLinks.main.title}
            />
            <DropdownHeaderMenu
              items={navigationHeaderLinks.services.items}
              title={navigationHeaderLinks.services.title}
            />
            <DropdownHeaderMenu
              items={navigationHeaderLinks.more.items}
              title={navigationHeaderLinks.more.title}
            />
          </div>
          <div className={style.location}>
            <LocationSelector />
          </div>
          <div className={style.user}>
            <CustomButton size="small" link="/login" className={style.button}>
              {t("header.cabinet")}
            </CustomButton>
            <CustomButton
              variant="orange"
              size="small"
              className={style.button}
            >
              {t("header.meet")}
            </CustomButton>
          </div>
        </nav>
      </div>
    </Container>
  );
};
