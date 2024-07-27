import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 className="text-light">Hello I'm</h5>
        <h1>Anirudh Sharma</h1>
        <h5>Full Stack Developer</h5>

        <HeaderSocials />

        {/* <div className="me">
          <img src={Me} alt="me" />
        </div> */}
        <div className="me-2">
          <h1 className="text-light">I make and break software</h1>
          <h4>
            " Hey! I'm Anirudh, a new engineering undergraduate from Delhi
            Technological University, India. I'm an aspiring Software Engineer,
            with extensive experience in full stack development and more than 9
            months of internship experience "{" "}
          </h4>
        </div>

        <CTA />

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
