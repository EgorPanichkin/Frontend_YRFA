import { useTranslation } from "react-i18next";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import style from "./Search.module.scss";

export const Search = () => {
  const { t } = useTranslation();
  return (
    <div className={style.search}>
      <input type="text" name="" id="" placeholder={t("header.search")} />
      <div className={style.searchIcon}>
        <button>
          <MagnifyingGlassIcon width={20} />
        </button>
      </div>
    </div>
  );
};
