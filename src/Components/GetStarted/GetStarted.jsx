import React from "react";
import "./getstarted.css";

function GetStarted() {
  return (
    <section className="g_wrapper mt-5 ">
      <div className="paddings innerWidth g_container">
        <div className="flexColCenter inner_container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:abdallhagamal17@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
