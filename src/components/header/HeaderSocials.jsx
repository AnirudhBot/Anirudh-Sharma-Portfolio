import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/anirudh-sharma-24516b215/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/AnirudhBot" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>

      <a
        href="https://leetcode.com/anirudh_dtu/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode />
      </a>
      <a
        href="https://twitter.com/bot_Anirudh"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
