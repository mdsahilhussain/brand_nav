import React from "react";
import "./footer.css";
import facebook from "../../assets/Facebook.svg";
import twitter from "../../assets/Twitter.svg";
import instagram from "../../assets/Instagram.svg";
import logo from "../../assets/Logo.svg";

import importantLink from "./importantLink.json";
function Footer() {
  const iconImg = [facebook, twitter, instagram];

  return (
    <section className="footer">
      <div className="footerContainer container">
        <div className="footer___info ">
          <img src={logo} alt="logoImage" />
          <p>
            <strong>LaslesVPN</strong> is a private virtual network that <br />{" "}
            has unique features and has high security.
          </p>
          <ul className="footer___info--icon">
            {iconImg.map((item, index) => (
              <li key={index}>
                <img src={item} alt={item} />
              </li>
            ))}
          </ul>
          <p>©2020LaslesVPN</p>
        </div>
        <div className="footer___importantLink">
          {importantLink.map((item, index) => (
            <ul key={index}>
              <h5>{item.title}</h5>
              {item.subTitle.map((item, index) => (
                <a href={item.url}>
                  <p key={index}>{item.points}</p>
                </a>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
