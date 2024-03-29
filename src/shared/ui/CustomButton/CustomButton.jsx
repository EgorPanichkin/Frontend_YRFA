import { useNavigate } from "react-router-dom";
import { ChevronRight, DocumentIcon, HomeIcon, PenIcon } from "@/shared";

import style from "./CustomButton.module.scss";

export const CustomButton = (props) => {
  const { children, color, type, className, disabled, icon, link, onClick } =
    props;

  const varianIcon = [
    icon === "document",
    icon === "home",
    icon === "pen",
    icon === "chevron",
  ];

  const classGenerated = [
    style[color],
    style.button,
    style[
      varianIcon[0]
        ? "documentStyle"
        : varianIcon[1]
          ? "errorStyle"
          : varianIcon[2]
            ? "recordingStyle"
            : varianIcon[3] && "linkStyle"
    ],
    className,
  ]
    .join(" ")
    .trim();

  const navigate = useNavigate();

  return (
    <button
      onClick={link ? () => navigate(link) : onClick}
      type={type}
      disabled={disabled}
      className={classGenerated}
    >
      {icon && varianIcon[0] ? (
        <DocumentIcon />
      ) : varianIcon[1] ? (
        <HomeIcon />
      ) : (
        varianIcon[2] && <PenIcon />
      )}
      {varianIcon[0]
        ? "Отправить резюме"
        : varianIcon[1]
          ? "На главную"
          : varianIcon[2]
            ? "Записаться на приём"
            : children}
      {varianIcon[3] && <ChevronRight className={style.chevronRight} />}
    </button>
  );
};
