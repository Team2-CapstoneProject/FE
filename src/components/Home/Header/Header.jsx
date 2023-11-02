import React from "react";
import "./styles.css";
import { MenuData } from "./MenuItem";

const Header = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="logo">Azure Voyage</h1>
      <ul className="nav-menu">
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
