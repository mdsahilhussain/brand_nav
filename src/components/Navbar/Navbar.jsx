import React, { useState } from "react";
import "./navbar.css";
import { Button } from "../index";

import Logo from "../../assets/Logo.svg";
import menuIcon from "../../assets/menu.png";
import closeIcon from "../../assets/close.png";

const navInfo = [
  { navName: "About", url: "#about" },
  { navName: "Features", url: "#features" },
  { navName: "Pricing", url: "#pricing" },
  { navName: "Testimonials", url: "#testimonials" },
  { navName: "Help", url: "#help" },
];

const click = (value) => {
  alert(`clicked for ${value}`);
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav container">
      <div className="menubar">
        <div className="menubar___style">
          <ui className="menubar___image">
            <img src={Logo} alt="logoIMG" />
          </ui>
          {toggleMenu ? (
            <img
              src={closeIcon}
              alt="closeIcon"
              className="menubar___image"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <img
              src={menuIcon}
              alt="menuIcon"
              className="menubar___image"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
        {toggleMenu && (
          <div className="menubar--linkList">
            <ul>
              {navInfo.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>
                    <p>{item.navName}</p>
                  </a>
                </li>
              ))}
              <div className=".menubar___button">
                <div onClick={() => click("Sign In")}>
                  <Button name="Sign In" type="btn___normal" />
                </div>
                <br />
                <div onClick={() => click("Sign Up")}>
                  <Button name="Sing up" type="btn___border" />
                </div>
              </div>
            </ul>
          </div>
        )}
      </div>
      <div className="navbar">
        <div className="nav___style">
          <ui className="nav___image">
            <img src={Logo} alt="logoIMG" />
          </ui>
          <ui className="nav___links">
            {navInfo.map((item, index) => (
              <li key={index}>
                <a href={item.url}>
                  <p>{item.navName}</p>
                </a>
              </li>
            ))}
          </ui>
          <ui className="nav___button">
            <div onClick={() => click("Sign In")}>
              <Button name="Sign In" type="btn___normal" />
            </div>
            <div onClick={() => click("Sign Up")}>
              <Button name="Sing up" type="btn___border" />
            </div>
          </ui>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
