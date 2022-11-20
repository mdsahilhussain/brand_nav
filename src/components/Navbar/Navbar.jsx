import React from "react";
import "./navbar.css";
import { Button } from "../index";

import Logo from "../../assets/Logo.svg";

const navInfo = [
  { navName: "About", url: "#about" },
  { navName: "Features", url: "#features" },
  { navName: "Pricing", url: "#pricing" },
  { navName: "Testimonials", url: "#testimonials" },
  { navName: "Help", url: "#help" },
];

function Navbar() {
  return (
    <nav className="nav">
      <ui className="nav___image">
        <img src={Logo} alt="logoIMG" />
      </ui>
      <ui className="nav___links">
        {navInfo.map((item, key) => (
          <li>
            <a href={item.url}>{item.navName}</a>
          </li>
        ))}
      </ui>
      <ui className="nav___button">
        <Button name="Sign In" type="btn___normal"/>
        <Button name="Sing up" type="btn___border" />
      </ui>
    </nav>
  );
}

export default Navbar;
