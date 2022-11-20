import React from "react";

import "./help.css";

import Button from "../Button/Button";

function Help() {
  return (
    <section className="help" id="help">
      <div className="help--white"></div>
      <div className="help--gray">
        <div className="help___card ">
          <div className="help___card--info">
            <h2>
              Subscribe Now for <br /> Get Special Features!
            </h2>
            <p>Let's subscribe with us and find the fun.</p>
          </div>
          <Button name="Subscribe Now" type="btn___header" />
        </div>
      </div>
    </section>
  );
}

export default Help;
