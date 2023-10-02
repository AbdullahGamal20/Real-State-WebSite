import React from "react";
import heroImage from "../assets/hero-image.png";
import "./hero.css";
import { TiLocationOutline } from "react-icons/ti";
import CountUp from "react-countup";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero_wrapper">
      <div className="paddings innerWidth flexCenter hero_container ">
        <div className="flexColStart hero_left">
          <div className="hero_title">
            <div className="orange_circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>

          <div className="flexColStart secondaryText hero_description">
            <span className="py-2">
              Find a variety of properties that suit you very easilty
            </span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search_bar">
            <TiLocationOutline color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        <div className=" flexCenter hero_right ">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
            className="img_container"
          >
            <img src={heroImage} alt="Image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
