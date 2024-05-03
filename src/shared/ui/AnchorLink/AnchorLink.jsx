import { Typography } from "..";
import style from "./AnchorLink.module.scss";

export const AnchorLink = ({ text, href }) => {
  return (
    <a className={style.link} href={href}>
      <Typography weight="bold">{text}</Typography>
    </a>
  );
};
