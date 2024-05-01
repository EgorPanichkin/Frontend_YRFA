import { BurgerMenu, ModalWrapper, PhoneIcon, Typography } from "@/shared";
import style from "./HeaderMobile.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { SideMenu } from "../../models/SideMenu/SideMenu";
import { SearchInput } from "@/entities";

export const HeaderMobile = () => {
  const { t } = useTranslation();
  const [isActive, setActive] = useState(false);

  return (
    <>
      <div className={style.headerMobile}>
        <div className={style.item}>
          <PhoneIcon color="#6F6F6F" />
          <Typography variant="smallBody" color="">
            {t("header.info")}{" "}
            <a href="tel:1225" className={style.phoneLink}>
              1225
            </a>
          </Typography>
        </div>
        <div className={style.search}>
          <SearchInput />
        </div>
        <button
          onClick={() => {
            setActive(true);
          }}
        >
          <BurgerMenu />
        </button>
      </div>
      {isActive && (
        <ModalWrapper onCloseModal={setActive}>
          <SideMenu handleClick={setActive} />
        </ModalWrapper>
      )}
    </>
  );
};
