import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import style from "./DropdownHeaderMenu.module.scss";
import { ChevronRightIcon, PolygonIcon } from "@/shared";

export const DropdownHeaderMenu = ({ items, title }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div
      ref={menuRef}
      onMouseEnter={() => {
        setShowMenu(true);
      }}
      onMouseLeave={() => {
        setShowMenu(false);
      }}
    >
      <div className={style.item} onClick={toggleMenu}>
        <PolygonIcon />
        {title}
      </div>
      {showMenu && (
        <div className={style.menuWrapper}>
          <div className={style.menuDropdown}>
            {items.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={style.childItem}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <span className={style.link}>{item.label}</span>
                <div className={style.chevron}>
                  {hoveredItem === item.label && <ChevronRightIcon />}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
