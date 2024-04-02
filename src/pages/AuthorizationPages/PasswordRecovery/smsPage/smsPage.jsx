import { Container } from "@/shared";
import style from "./smsPage.module.sass";
import { PhoneForm } from "@/features/PasswordRecovery";

export const SmsPage = () => {
  return (
    <Container>
      <div className={style.smsWrapper}>
        <PhoneForm />
      </div>
    </Container>
  );
};
