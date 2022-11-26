import React from "react";

//* ================================ use css style sheat ================================
import "./header.css";

// *================================ use images ================================
import headerImage from "../../assets/Illustration 1.svg";
import Button from "../Button/Button";

const click = () => {
  alert("Get Started");
};

function Header() {
  return (
    <header>
      <div className="header___title">
        <h1>
          Want anything to be easy with <span>LaslesVPN.</span>
        </h1>
        <p>
          Provide a network for all your needs with ease and fun using{" "}
          <strong> LaslesVPN</strong> discover interesting features from us.
        </p>
        <div className="header___title-btn" onClick={() => click()}>
          <Button name="Get Started" type="btn___header" />
        </div>
      </div>
      <div className="header___imgSection">
        <img src={headerImage} alt="headerImage" />
      </div>
    </header>
  );
}

export default Header;
