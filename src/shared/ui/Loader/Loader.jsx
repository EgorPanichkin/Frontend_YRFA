import style from "./Loader.module.scss";

export const Loader = () => {
  return (
    <svg
      className={style.container}
      viewBox="0 0 50 31.25"
      height="50"
      width="50"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        className={style.track}
        strokeWidth="3"
        fill="none"
        pathLength="100"
        d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
      />
      <path
        className={style.car}
        strokeWidth="3"
        fill="none"
        pathLength="100"
        d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
      />
    </svg>
  );
};
