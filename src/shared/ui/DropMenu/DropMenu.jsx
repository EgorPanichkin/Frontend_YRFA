import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./DropMenu.module.scss";
import { ChevronRight } from "@/shared";

export function DropMenu({ items, title }) {
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

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
    <div ref={menuRef}>
      <div className={style.item} onClick={toggleMenu}>
        {title}
      </div>
      {showMenu && (
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
                {hoveredItem === item.label && <ChevronRight />}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
