import { Container } from "@/shared";
import style from "./smsPage.module.scss";
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
