import React from "react";
import img1 from "../assets/prologis.png";
import img2 from "../assets/tower.png";
import img3 from "../assets/equinix.png";
import img4 from "../assets/realty.png";

import Slider from "react-slick";
import "./companies.css";

function Companies() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    loop: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="c_wrapper">
      <div className=" c_container">
        <Slider {...settings}>
          <img src={img1} alt="Image" />

          <img src={img2} alt="Image" />

          <img src={img3} alt="Image" />

          <img src={img4} alt="Image" />

          <img src={img1} alt="Image" />

          <img src={img2} alt="Image" />

          <img src={img3} alt="Image" />

          <img src={img4} alt="Image" />
        </Slider>
      </div>
    </section>
  );
}

export default Companies;
