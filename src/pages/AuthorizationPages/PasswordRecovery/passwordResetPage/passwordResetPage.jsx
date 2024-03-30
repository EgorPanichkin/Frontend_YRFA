import { Container } from "@/shared";
import style from "./passwordResetPage.module.sass";
import { PasswordResetForm } from "@/features/PasswordRecovery";

export const PasswordResetPage = () => {
  return (
    <Container>
      <div className={style.passwordResetWrapper}>
        <PasswordResetForm />
      </div>
    </Container>
  );
};
