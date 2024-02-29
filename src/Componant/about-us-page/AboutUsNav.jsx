// import React from 'react'
import "../../../node_modules/@popperjs/core/dist/umd/popper";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../Style/about-us-style/aboutUsGeneral.css";
import "../Style/about-us-style/aboutUsNav.css"
function AboutUsNav() {
  return (
    <>
    <nav className="nav2 d-flex align-items-center">
    <div className="container">
      <ul className="row">
        <h2 className="bold col-3 gap-5">About ecobee</h2>
        <li className="li col-1">
          <a href=""> Our story</a>
        </li>
        <li className="li col-1">
          <a href="#Our-vision">Our vision</a>{" "}
        </li>
        <li className="li col-1">
          <a href="#Our-impact">Our impact</a>
        </li>
        <li className="customer col-2">
          <a href="#Our-customer-support">Our customer support</a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="hr" />
  </>
  )
}

export default AboutUsNav