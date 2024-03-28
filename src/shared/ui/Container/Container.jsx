import style from "./Container.module.scss";

export function Container({ children }) {
  return <div className={style.container}>{children}</div>;
}
