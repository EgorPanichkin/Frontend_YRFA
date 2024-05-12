import style from "./MoreButton.module.scss";
// import { useState } from "react";
import { Typography, ChevronDownIcon } from "@/shared";

export const MoreButton = (props) => {
  const { onClick } = props;

  return (
    <div className={style.moreButton} onClick={onClick}>
      <Typography weight="bold">Ещё</Typography>
      <div className="">
        <ChevronDownIcon />
      </div>
    </div>
  );
};
