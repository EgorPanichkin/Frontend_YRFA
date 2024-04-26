import { Link } from "react-router-dom";
import style from "./DropMenuServices.module.scss";
import { PATHS } from "@/shared";

export const DropMenuServices = ({ activeIndex, menuRef, data }) => {
  return (
    <div
      ref={menuRef}
      className={activeIndex ? style.dropMenuBlock : style.notSee}
    >
      <ul className={style.links}>
        {data.map((item, index) => (
          <Link to={PATHS.selectDirections + `/${item.id}`} key={index}>
            {item.category_name}
          </Link>
        ))}
      </ul>
    </div>
  );
};
