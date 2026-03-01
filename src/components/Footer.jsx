import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footerContent">
        <div className="footerLeft">
          <h2>Jahir Mullick</h2>
          <p>Building exceptional web experiences.</p>
        </div>
        <div className="footerRight">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#timeline">Experience</a>
          <a href="#services">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; 2025 Jahir Mullick. All rights reserved.</p>
        <a href="#home" className="scrollTop" aria-label="Scroll to top">
          <AiOutlineArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
