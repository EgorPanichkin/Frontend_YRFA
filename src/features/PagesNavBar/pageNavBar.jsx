import { Container, AnchorLink } from "@/shared";
import style from "./style.module.sass";

export const PagesNavBar = ({ links }) => {
  return (
    <div className={style.navbar}>
      <Container>
        <div className={style.wrapper}>
          {links?.map((link, index) => {
            return (
              <AnchorLink
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
