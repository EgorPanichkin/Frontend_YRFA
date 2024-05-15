import { useState } from "react";
import style from "./SearchInput.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { GlassIcon } from "@/shared/assets";

export const SearchInput = (props) => {
  const { size } = props;
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <div className={style.searchPages}>
      <form onSubmit={handleSearch} className={style.searchPages}>
        <input
          type="text"
          placeholder={t("header.search")}
          value={searchTerm}
          onChange={handleInputChange}
          className={`${style.searchInput} ${size === "big" ? style.inputPadding : style.inputPaddingDef}`}
        />
        <div
          className={`${style.searchIcon} ${size === "big" ? style.searchIconBig : style.searchIconDef}`}
        >
          <button type="submit">
            <GlassIcon />
          </button>
        </div>
      </form>
    </div>
  );
};
