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
              <small>2 Years of Work Experience</small>
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
            A Software Engineer with a passion for technology and a drive for
            constant learning. With a background in art education and
            multi-lingual learning along with 8 years of experience in the
            field, I now plan to assimilate those skills into the tech industry.
            Over the past year I have developed a variety of skills by working
            on numerous front-end and back-end web apps. My current experience
            is based in working with technologies such as HTML, JavaScript, CSS,
            NodeJS, React, MongoDB, MySQL and many other frameworks for frontend
            web and app development.
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
