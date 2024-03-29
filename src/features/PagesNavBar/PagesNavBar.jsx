import { Container, PageNavLink } from "@/shared";
import style from "./PagesNavBar.module.scss";

export const PagesNavBar = ({ links }) => {
  return (
    <div className={style.navbar}>
      <Container>
        <div className={style.wrapper}>
          {links?.map((link, index) => {
            return (
              <PageNavLink
                text={link.text}
                href={link.href}
                key={`${link.href}${index}`}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};
