import React, { useState } from "react";
import "./Header.scss";
import { IoCloseOutline } from "react-icons/io5";
function Header() {
  const [visibleMenu, setVisibleMenu] = useState(true);
  console.log(visibleMenu);
  return (
    <header>
      <div>
        <div className="navbar">
          <div className="logo">
            <img src="img/logo.png" alt="LOGO" />
          </div>
          <ul className={visibleMenu ? "nav active" : "nav "}>
            <li>Главная</li>
            <li>Услуги</li>
            <li>Цены</li>
            <li>Контакты</li>
            
          </ul>
          <div className="phone">
              <img src="img/ph.png" alt="icon" />
              <span>1224</span>
            </div>
          <span className="menu">
            {visibleMenu ? (
              <img
                onClick={() => setVisibleMenu(!visibleMenu)}
                src="img/menu.png"
                alt=""
              />
            ) : (
              <span
                onClick={() => setVisibleMenu(!visibleMenu)}
                className="close-menu"
              >
                <IoCloseOutline />
              </span>
            )}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
