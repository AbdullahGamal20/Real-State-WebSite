import React from "react";
import logo from "../assets/logo2.png";
import "./footer.css";

function Footer() {
  return (
    <section className="f_wrapper">
      <div className="paddings innerWidth flexCenter f_container">
        <div className="flexColCenter f_left">
          <img src={logo} alt="Image" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f_right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">6 October,Cairo,Egypt</span>
          <div className="flexCenter f_menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
