import React from "react";

import "./features.css";

import featuresImg from "../../assets/Illustration 2.svg";
import pointsImg from "../../assets/Group 1120.svg";

const featuresInfo = [
  {
    featuresPoint: "Powerfull online protection.",
  },
  {
    featuresPoint: "Internet without borders.",
  },
  {
    featuresPoint: "Supercharged VPN",
  },
  {
    featuresPoint: "No specific time limits.",
  },
];

function Features() {
  return (
    <section className="features" id="features">
      <img src={featuresImg} alt="featuresImg" />
      <div className="features___detail">
        <h2>We Provide Many Features You Can Use</h2>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        {featuresInfo.map((item, index) => (
          <div key={index} className="features___detail--points">
            <img src={pointsImg} alt="pointsImg"/>
            <p>{item.featuresPoint}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
