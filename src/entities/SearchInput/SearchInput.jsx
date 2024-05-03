import { useState } from "react";
import { GlassIcon } from "@/shared";
import style from "./SearchInput.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate("/search");
    }
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      handleSearch(e);
    }
    setSearchTerm("");
  };

  return (
    <div className={style.search}>
      <form onSubmit={handleSearch} className={style.search}>
        <input
          type="text"
          placeholder={t("header.search")}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className={style.searchIcon}>
          <button type="submit" onClick={handleSearch}>
            <GlassIcon />
          </button>
        </div>
      </form>
    </div>
  );
};
