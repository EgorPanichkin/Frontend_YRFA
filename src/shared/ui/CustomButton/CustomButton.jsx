import { useNavigate } from "react-router-dom";
import style from "./CustomButton.module.scss";

export const CustomButton = (props) => {
  const {
    children,
    variant = "default",
    size,
    type,
    className,
    disabled,
    link,
    onClick,
    reference,
  } = props;

  const classGenerated = [style[variant], style[size], style.button, className]
    .join(" ")
    .trim();

  const navigate = useNavigate();

  return (
    <button
      onClick={link ? () => navigate(link) : onClick}
      type={type}
      disabled={disabled}
      className={classGenerated}
      ref={reference}
    >
      {children}
    </button>
  );
};
