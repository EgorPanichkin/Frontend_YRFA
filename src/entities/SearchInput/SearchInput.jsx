import { GlassIcon } from "@/shared";
import style from "./SearchInput.module.scss";
import { useTranslation } from "react-i18next";

export const SearchInput = () => {
  const { t } = useTranslation();
  return (
    <div className={style.search}>
      <input type="text" name="" id="" placeholder={t("header.search")} />
      <div className={style.searchIcon}>
        <button>
          <GlassIcon />
        </button>
      </div>
    </div>
  );
};
