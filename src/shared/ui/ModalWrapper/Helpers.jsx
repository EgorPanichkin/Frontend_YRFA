import { useEffect, useRef } from "react";
import style from "./Helpers.module.scss";

export const ModalWrapper = ({ children, onCloseModal }) => {
  const modalRef = useRef(null);

  // Функция для выключения горизонтального скрола
  useEffect(() => {
    const modal = modalRef.current;
    const bodyStyle = document.body.style;

    bodyStyle.overflow = modal ? "hidden" : "auto";

    return () => {
      bodyStyle.overflow = "auto";
    };
  }, []);

  // Функция для обработки клика по тёмной области
  const handlModalClick = (event) => {
    event.target.classList.contains(style.modalBg) && onCloseModal();
  };

  return (
    <div ref={modalRef} onClick={handlModalClick} className={style.modalBg}>
      {children}
    </div>
  );
};
