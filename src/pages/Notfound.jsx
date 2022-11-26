import React from "react";

import NotFound from "../assets/not-found.svg";
function Notfound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={NotFound}
            alt=""
            style={{
              width: "80%",
              hight: "auto"
            }}
          />
        </div>
        <h1 style={{ textAlign: "center", marginTop: "18px" }}>
          Opps...... something worng
        </h1>
      </div>
    </div>
  );
}

export default Notfound;
