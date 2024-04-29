import { Cross, CustomButton, Logo, Typography } from "@/shared";
import style from "./SideMenu.module.scss";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { LocationSelector } from "../LocationSelector";

export const SideMenu = ({ handleClick }) => {
  return (
    <div className={style.sideMenu}>
      <div className={style.top}>
        <Logo width={80} height={52} color="#12709A" />
        <Cross
          color="#BFBFBF"
          onClick={() => {
            handleClick(false);
          }}
        />
      </div>
      <CustomButton color="orange" className={style.button}>
        <Typography variant="body" weight="bold" color="light">
          Записаться онлайн
        </Typography>
      </CustomButton>
      <CustomButton color="default" className={style.button}>
        <Typography variant="body" weight="bold" color="paragraph">
          Войти как пациент
        </Typography>
      </CustomButton>
      <div className={style.selectors}>
        <LocationSelector />
        <LanguageSelector />
      </div>
    </div>
  );
};
