import style from "./LocationSelector.module.scss";

export const LocationSelector = () => {
  const city = "Bishkek";

  // useEffect(() => {
  //   localStorage.getItem("location") ? null : nav("/location")
  // })

  const handleSelect = () => {};

  const selectAciveClass = (value) => {
    return value == city ? style.active : style;
  };

  return (
    <div className={style.location}>
      <button
        value={"Bishkek"}
        onClick={(e) => handleSelect(e.target.value)}
        className={selectAciveClass("Bishkek")}
      >
        Бишкек
      </button>
      <button
        value={"Osh"}
        onClick={(e) => handleSelect(e.target.value)}
        className={selectAciveClass("Osh")}
      >
        Ош
      </button>
      <button
        value={"Jalal-Abad"}
        onClick={(e) => handleSelect(e.target.value)}
        className={selectAciveClass("Jalal-Abad")}
      >
        Джалал-Абад
      </button>
    </div>
  );
};
