import { useTranslation } from "react-i18next";

import style from "./Search.module.scss";
import { SearchIcon } from "@/shared";

export const Search = () => {
  const { t } = useTranslation();
  return (
    <div className={style.search}>
      <input type="text" name="" id="" placeholder={t("header.search")} />
      <div className={style.searchIcon}>
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
