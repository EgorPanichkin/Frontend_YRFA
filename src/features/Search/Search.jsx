import { GlassIcon } from "@/shared";
import style from "./style.module.sass";
import { useTranslation } from "react-i18next";

export const Search = () => {
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
