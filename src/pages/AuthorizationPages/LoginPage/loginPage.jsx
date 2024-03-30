import { Container } from "@/shared";

import style from "./loginPage.module.sass";
import { Authorization } from "@/features";

export const LoginPage = () => {
  return (
    <Container>
      <div className={style.loginWrapper}>
        <Authorization />
      </div>
    </Container>
  );
};
