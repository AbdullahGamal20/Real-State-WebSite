import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSettings } from "../../utils/Common";
import data from "../../utils/slider";
import "swiper/css";
import "./residencies.css";

function Residencies() {
  return (
    <section className="r_wrapper">
      <div className=" paddings innerWidth r_container">
        <div className="r_head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" flexColStart r_card">
                  <img src={card.image} alt="Image" />

                  <span className="secondaryText r_price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>

                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r_buttons">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        &lt;
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Residencies;
