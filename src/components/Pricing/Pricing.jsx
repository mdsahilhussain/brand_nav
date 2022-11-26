import React from "react";

import "./pricing.css";

import priceCardImg from "../../assets/Free.svg";
import checkImg from "../../assets/check.svg";

import Button from "../Button/Button";

const pricingInfo = [
  {
    titel: "Free Plan",
    subTitel: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    price: "Free",
    name: "Select",
    type: "btn___border",
  },
  {
    titel: "Standard Plan",
    subTitel: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    price: "$9",
    name: "Select",
    type: "btn___border",
  },
  {
    titel: "Premium Plan",
    subTitel: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
    price: "$12",
    name: "Select",
    type: "btn___priceTag",
  },
];

const click = (value) => {
  alert(value);
};

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <h2>Choose Your Plan</h2>
      <p>
        Let's choose the package that is best for you and explore it happily and
        <br />
        cheerfully.
      </p>
      <div className="pricingSection">
        {pricingInfo.map((item, index) => (
          <div className="pricingSection___card">
            <div className="pricingSection___card--image">
              <img src={priceCardImg} alt="priceCardImg" />
            </div>
            <h5>{item.titel}</h5>
            <div className="pricingSection___detail">
              {item.subTitel.map((item, index) => (
                <div key={index} className="pricingSection___detail--points">
                  <img src={checkImg} alt="checkImg" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <h4>
              {item.price}
              <span> / mo</span>
            </h4>
            <div onClick={() => click("Selected")}>
              <Button name={item.name} type={item.type} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
