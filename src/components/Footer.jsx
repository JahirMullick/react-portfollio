import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>

        <h2>MD Jahir Mullick</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
        <h4> Copyright &copy; 2025 Jahir | All Rights Reserve</h4>
      </div>

      <aside>
        <h4>Social Media</h4>

        <article>

          <a href="https://www.linkedin.com/in/md-jahir-mullick/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/JahirMullick" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
