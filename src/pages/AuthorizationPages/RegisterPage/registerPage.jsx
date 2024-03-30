import { RegistrationForm } from "@/features";
import { Container } from "@/shared";

import style from "./registerPage.module.sass";

export const RegisterPage = () => {
  return (
    <Container>
      <div className={style.registerPageWrapper}>
        <RegistrationForm />
      </div>
    </Container>
  );
};
