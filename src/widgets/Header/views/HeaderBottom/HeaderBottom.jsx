import { Container, Logo, navigationHeaderLinks } from "@/shared";
import style from "./HeaderBottom.module.scss";
import { Link } from "react-router-dom";
import { DropdownHeaderMenu } from "../../models/DropdownHeaderMenu/DropdownHeaderMenu";

export const HeaderBottom = () => {
  return (
    <Container>
      <div className={style.navigation}>
        <Link to="/" className={style.logoLink}>
          <Logo width="60" height="40" color="#12709A" />
        </Link>
        <nav>
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
          <div className={style.user}></div>
        </nav>
      </div>
    </Container>
  );
};
