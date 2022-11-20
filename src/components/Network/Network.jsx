import React from "react";

import "./network.css";

import globalImage from "../../assets/Huge Global.svg";
import netflex from "../../assets/Mask Group.svg";
import reditt from "../../assets/Mask Group (1).svg";
import amazon from "../../assets/Mask Group (2).svg";
import discode from "../../assets/Mask Group (3).svg";
import sportfy from "../../assets/Mask Group (4).svg";

const companyImage = [netflex, reditt, amazon, discode, sportfy];

function Network() {
  return (
    <section className="network" id="network">
      <h2>
        Huge Global Network <br /> of Fast VPN
      </h2>
      <p>
        See <strong>LaslesVPN</strong> everywhere to make it easier for you when
        you move <br /> locations.
      </p>
      <div className="network___global--image">
        <img src={globalImage} alt="globalImage" />
      </div>
      <div className="network___companey--image">
        {companyImage.map((item, index) => (
          <img src={item} alt={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Network;
