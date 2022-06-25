import React from "react";
import "./header.css";
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials";
// import Me from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 className="text-light">Hello I'm</h5>
        <h1>Anirudh Sharma</h1>
        <h5>FullStack Developer</h5>
        

        <HeaderSocials />

        {/* <div className="me">
          <img src={Me} alt="me" />
        </div> */}
        <div className="me-2">
          <h1 className="text-light">I build things for the web</h1>
          <h4>" Hey! I'm a pre-final year student pursuing B.Tech from Delhi Technological University, India. I'm an aspiring Software Engineer currently focused on specializing in Web Development and building accessible, human-centered products. " </h4>
        </div>

        <CTA />

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
