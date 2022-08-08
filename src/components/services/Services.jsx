import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducting usability tests to develop user-friendly interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing comprehensive wireframes to showcase website
                functionality.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Researching and implementing new technologies to engage new
                users.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Rapid prototyping to deliver a viable product within short
                timeframes.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UX/UI  */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing and maintaining sites using HTML, CSS, JavaScript,
                React and Git.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Writing clean, maintainable and testable code to ensure
                collaboration among developers on the team.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Refactoring code to up to date syntax to provide future
                developers with efficient code.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborating with team members to design user interfaces that
                are visually interesting and easy to use.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT  */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building and maintaining databases using MySQL and MongoDB.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Utilizing Express and NodeJS to develop servers to serve web
                applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing platforms for e-commerce, social media, and book
                libary systems.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Data aggregation and routing for full stack applications using
                the MERN stack.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION  */}
      </div>
    </section>
  );
};

export default Services;
