import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/douglasmcgillivray/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/mcgidoug" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.youtube.com/channel/UCzYuWt8c-2Xzeoi0V5TZtmg"
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
