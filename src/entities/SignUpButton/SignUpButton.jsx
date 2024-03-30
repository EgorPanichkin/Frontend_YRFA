import style from "./SignUpButton.module.scss";
import { Link } from "react-router-dom";

export const SignUpButton = ({ children }) => {
  return (
    <Link className={style.link}>
      <span className={style.btn}>{children}</span>
    </Link>
  );
};
