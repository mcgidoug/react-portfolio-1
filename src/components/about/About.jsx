import React from "react";
import "./about.css";
import ME from "../../assets/perfourmer-pic.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year of Work Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Collaborators</h5>
              <small>
                3 Fullstack applications delivered in the past 3 months
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I am an aspiring programmer currently enrolled at Northwestern
            University. My educational background includes art-education and
            multi-lingual learning. I have been teaching for the past eight
            years and recently decided to change careers. I currently specialize
            in HTML, CSS, and JavaScript but plan on furthering my learning on
            other language applicable to front-end website development.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
