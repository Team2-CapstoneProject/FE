import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { navigationLinks } from "../../data/data";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard");
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (pathname) => {
    setActiveLink(pathname);
    navigate(pathname);
  };

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <span className="info-name">Azure Voyage</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href={navigationLink.pathname}
                className={`nav-link ${
                  activeLink === navigationLink.pathname ? "active" : " "
                }`}
                onClick={() => handleLinkClick(navigationLink.pathname)}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
