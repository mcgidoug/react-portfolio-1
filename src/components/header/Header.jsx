import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/job-profile-pic.JPG";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>My name is</h5>
        <h1>Doug McGillivray</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <a
          href="https://midwest-development.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="scroll__down"
        >
          Midwest Dev
        </a>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="ME" />
        </div>
      </div>
    </header>
  );
};

export default Header;
