import { Link } from "react-router-dom";
import style from "./DropMenuServices.module.scss";

export const DropMenuServices = ({ activeIndex, menuRef, data }) => {
  return (
    <div
      ref={menuRef}
      className={activeIndex ? style.dropMenuBlock : style.notSee}
    >
      <ul className={style.links}>
        {data.map((item, index) => (
          <Link to={`select-direction/service/${item.id}`} key={index}>
            {item.category_name}
          </Link>
        ))}
      </ul>
    </div>
  );
};
