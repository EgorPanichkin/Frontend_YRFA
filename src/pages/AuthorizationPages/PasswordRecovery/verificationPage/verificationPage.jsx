import { Container } from "@/shared";

import style from "./verificationPage.module.scss";
import { VerificationForm } from "@/features/PasswordRecovery";

export const VerificationPage = () => {
  return (
    <Container>
      <div className={style.verificationWrapper}>
        <VerificationForm />
      </div>
    </Container>
  );
};
