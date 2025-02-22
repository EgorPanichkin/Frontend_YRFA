import style from "./style.module.scss";

export const HomeCards = () => {
  return (
    <div className={style.widgetsContainer}>
      <div className={style.widgetTop}>
        <div className={style.widgetContent}>
          <div className={style.widgetText}>
            <h5>Запишитесь на прием к врачу по скидке -20%</h5>
            <p>Акция действует до 15 марта</p>
          </div>
          <button className={style.widgetButton}>Запись на прием</button>
        </div>
        <div className={style.widgetImg}>img1</div>
      </div>
      <div className={style.widgetBottom}>
        <div className={style.widgetContent}>
          <div className={style.widgetText}>
            <h5>Получите консультацию от опытных врачей</h5>
            <p>Акция действует до 15 марта</p>
          </div>
          <button className={style.widgetButton}>Подробнее</button>
        </div>
        <div className={style.widgetImgBottom}>img2</div>
      </div>
    </div>
  );
};
