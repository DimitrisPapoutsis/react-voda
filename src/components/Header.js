import React from "react";
import { NavLink } from "react-router-dom";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./Search";

function Menu(props) {
  return props.menu.map(menu => {
    return (
      <li className="menu-item">
        <NavLink
          className="menu-link"
          to={`/${menu.title
            .toString()
            .toLowerCase()
            .replace(/ /g, "")}`}
        >
          {menu.title}
        </NavLink>
      </li>
    );
  });
}

function Slider(props) {

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1500
  };

  const slides = props.slider.map(slide => {
    return (
      <div style={{ height: "100%" }}>
        <div 
          className="slider-item"
          style={{ backgroundImage: "url(" + slide.image + ")" }}
        >
          <div className="slider-item-title" >{slide.title}</div>
          <div className="slider-item-subtitle" >{slide.subtitle}</div>
        </div>
      </div>
    );
  });

  return <Slick key={slides.id} {...slickSettings}>{slides}</Slick>;
}

function Header(props) {
  return (
    <header className="header">
      <div className="header-top">
        <nav className="menu">
          <ul className="menu-list">
            <Menu menu={props.menu} />
          </ul>
        </nav>
        <Search />
      </div>
      <Slider slider={props.slider} />
    </header>
  );
}
export default Header;
