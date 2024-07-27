import React from "react";
import "./about.css";
import Me from "../../assets/me.jpeg";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="Me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Interned with 3 startups</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Full Stack projects</small>
            </article>
          </div>

          <p>
            I am a recent
            B.Tech graduate with a strong foundation in Full Stack Development,
            driven by a passion for creating efficient and user-friendly
            software solutions. Throughout my academic journey, I have honed my
            skills in various programming languages and frameworks, enabling me
            to design, develop, and deploy robust web applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
