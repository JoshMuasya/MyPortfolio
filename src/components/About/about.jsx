import React from "react";
import "./about.css";
import ME from "../../assets/me2.png";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { GiFullFolder } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about_card">
              <GiFullFolder className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <div className="about_lower">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                exercitationem rem voluptates fugit vitae dignissimos rerum,
                facilis temporibus consequatur deserunt tempore suscipit cumque
                error, blanditiis expedita illum dolore? Ullam, placeat.
              </p>

              <a href="#contact" className="btn btn-primary about_btn">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
