import React from "react";

import "./about.css";
import addressIcon from "../../assets/Group 1215.svg";
import userIcon from "../../assets/Group 1216.svg";
import dataBaseIcon from "../../assets/Group 1217.svg";

const aboutInfo = [
  {
    iconImage: userIcon,
    titel: "90+",
    subTitel: "Users",
  },
  {
    iconImage: addressIcon,
    titel: "30+",
    subTitel: "Locations",
  },
  {
    iconImage: dataBaseIcon,
    titel: "50+",
    subTitel: "Servers",
  },
];

function About() {
  return (
    <section className="about">
      {aboutInfo.map((item, index) => (
        <div key={index} className="about___card">
          <div className="about___card--image">
            <img src={item.iconImage} alt="" />
          </div>
          <div className="about___card--detail">
            <h4>{item.titel}</h4>
            <p>{item.subTitel}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default About;
