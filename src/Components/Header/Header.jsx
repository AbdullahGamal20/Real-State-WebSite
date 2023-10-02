import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-scroll";

const links = [
  {
    display: "Residencies",
    url: "#",
    className: "r_container",
  },
  {
    display: "Our Value",
    url: "#",
    className: "v_container",
  },
  {
    display: "Contact Us",
    url: "#",
    className: "con_container ",
  },
  {
    display: "Get Started",
    url: "#",
    className: "g_container",
  },
];

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h_wrapper">
      <div className="h_container flexCenter paddings innerWidth">
        <Link to="hero_wrapper">
          <img src={logo} alt="logo" width={100} />
        </Link>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="h_menu flexCenter" style={getMenuStyles(menuOpened)}>
            {links.map((item, index) => {
              return (
                <Link
                  className={`link`}
                  href={item.url}
                  key={index}
                  to={item.className}
                  span={true}
                  // smooth={true}
                >
                  {item.display}
                </Link>
              );
            })}
            <button className="button ">
              <Link to="con_container">Contact</Link>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu_icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
