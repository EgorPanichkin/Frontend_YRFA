import { useEffect, useState } from "react";
import { Typography } from "../Typography";

import style from "./ReusedTextSection.module.scss";

export const ReusedTextSection = (props) => {
  const { title, contentList } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Функция обработчика события изменения размера окна
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Обновляем состояние при изменении ширины окна
    };

    // Добавляем слушателя события изменения размера окна
    window.addEventListener("resize", handleResize);

    // Убираем слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Пустой массив зависимостей означает, что эффект будет выполнен один раз при монтировании компонента

  return (
    <div>
      <Typography className={style.title} variant="h2">
        {title}
      </Typography>
      {contentList.map((content, index) => (
        <div className={style.content} key={index}>
          {index % 2 === 0 ? (
            <>
              <div>
                <Typography className={style.subTitle} variant="h5">
                  {content.subTitle}
                </Typography>
                <Typography variant="body">{content.body}</Typography>
              </div>
              <img className={style.img} src={content.img} alt="img" />
            </>
          ) : (
            <>
              {windowWidth > 320 && (
                <img className={style.img} src={content.img} alt="img" />
              )}
              <div>
                <Typography className={style.subTitle} variant="h5">
                  {content.subTitle}
                </Typography>
                <Typography variant="body">{content.body}</Typography>
              </div>
              {windowWidth < 320 && (
                <img className={style.img} src={content.img} alt="img" />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
