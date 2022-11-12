import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/zedalogo.svg";
const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const active = headerNav.findIndex((e) => e.path === pathname);
  return (
    <div className="header">
      <div className="header__wrap container">
        <Link className="logo" to="/">
          <img src={logo} alt="zeda logo" />
        </Link>
        <ul className="header__nav">
          {headerNav.map((navlink, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={navlink.path}>{navlink.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
