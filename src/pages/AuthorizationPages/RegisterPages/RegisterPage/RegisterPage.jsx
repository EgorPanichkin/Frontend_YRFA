import { Container } from "@/shared";

import style from "./RegisterPage.module.scss";
import { Registration } from "@/features";

export const RegisterPage = () => {
  return (
    <Container>
      <div className={style.registerPageWrapper}>
        <Registration />
      </div>
    </Container>
  );
};
