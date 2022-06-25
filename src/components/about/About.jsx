import React from "react";
import "./about.css";
import Me from "../../assets/Anirudh.jpeg";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Interned with 2 startups</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Projects</h5>
              <small>10+ WebDev projects</small>
            </article>
          </div>

          <p>
            My name is Anirudh and I'm currently a student specializing in FullStack web applications. I started web development in my freshman year and have acquired a strong knowledge in this domain over time. I wish to gain maximum expertise in this field and work as a software engineer post my graduation in 2024.  
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
