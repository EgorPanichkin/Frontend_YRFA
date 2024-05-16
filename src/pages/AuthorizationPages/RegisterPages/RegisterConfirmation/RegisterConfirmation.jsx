import { RegisterConfirmationForm } from "@/features";
import { Container } from "@/shared";

import style from "./RegisterConfirmation.module.scss";

export const RegisterConfirmation = () => {
  return (
    <Container>
      <div className={style.registerConfirmationWrapper}>
        <RegisterConfirmationForm />
      </div>
    </Container>
  );
};
