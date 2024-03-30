import styles from "./ButtonSubmit.module.scss";

export const ButtonSubmit = ({ children, type, disabled, className }) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
