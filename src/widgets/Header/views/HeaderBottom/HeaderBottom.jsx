import {
  Container,
  Logo,
  Typography,
  UserCircleIcon,
  navigationHeaderLinks,
} from "@/shared";
import style from "./HeaderBottom.module.scss";
import { Link } from "react-router-dom";
import { DropdownHeaderMenu } from "../../models/DropdownHeaderMenu/DropdownHeaderMenu";
import { LocationSelector } from "../../models/LocationSelector";
import { SignUpButton } from "@/entities";

export const HeaderBottom = () => {
  return (
    <Container>
      <div className={style.navigation}>
        <Link to="/" className={style.logoLink}>
          <Logo width="60" height="40" color="#12709A" />
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
            <Link to="/login" className={style.link}>
              <UserCircleIcon width={20} />
              <Typography variant="h9">Личный кабинет</Typography>
            </Link>
            <SignUpButton>Записаться онлайн</SignUpButton>
          </div>
        </nav>
      </div>
    </Container>
  );
};
