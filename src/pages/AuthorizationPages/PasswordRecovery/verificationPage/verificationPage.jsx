import { Container } from "@/shared";
import { VerificationForm } from "@/features/passwordRecovery";

import style from "./verificationPage.module.sass";

export const VerificationPage = () => {
  return (
    <Container>
      <div className={style.verificationWrapper}>
        <VerificationForm />
      </div>
    </Container>
  );
};
