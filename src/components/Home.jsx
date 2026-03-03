import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowRight, BsSend } from "react-icons/bs";
import { FaReact, FaNodeJs, FaCode } from "react-icons/fa";
import me from "../assets/pic3.png";

const Home = ({ ratio }) => {
  const projectCount = useRef(null);

  const animationProjectsCount = () => {
    animate(0, 5, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div id="home">
      <section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="greeting" variants={itemVariants}>
            👋 Hello, I'm
          </motion.span>

          <motion.h1 variants={itemVariants}>
            MD Jahir<br />Mullick
          </motion.h1>

          <div className="typewriterWrap">
            <Typewriter
              options={{
                strings: ["React Native Developer", "React Developer", "Full Stack Developer"],
                autoStart: true,
                loop: true,
                cursor: "▌",
                wrapperClassName: "typewriterpara",
              }}
            />
          </div>

          <motion.p className="heroDescription" variants={itemVariants}>
            Full-Stack Developer with expertise in building
            high-quality, scalable web applications. Passionate
            about clean code and innovative solutions.
          </motion.p>

          <motion.div className="heroCtas" variants={itemVariants}>
            <a className="ctaPrimary" href="#work">
              View My Work <BsArrowRight />
            </a>
            <a className="ctaOutline" href="#contact">
              Get In Touch <BsSend />
            </a>
          </motion.div>

          <motion.div className="ctaResume" variants={itemVariants}>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1-fmH99BFsk8ig082kpSXDrjCYSHUcnoE/view?usp=sharing"
            >
              📄 Download CV
            </a>
          </motion.div>

          <motion.div className="heroStats" variants={itemVariants}>
            <article>
              <p>
                <motion.span
                  whileInView={animationProjectsCount}
                  ref={projectCount}
                >
                  5
                </motion.span>+
              </p>
              <span>Projects</span>
            </article>
            <article>
              <p>3</p>
              <span>Years Exp.</span>
            </article>
            <article>
              <p>
                <a href="mailto:jahirmj2001@gmail.com" className="contactLink">✉</a>
              </p>
              <span>Contact</span>
            </article>
          </motion.div>
        </motion.div>
      </section>

      <section>
        <div className="profileImageContainer">
          <div className="floatingIcon floatingIcon1">
            <FaReact />
          </div>
          <div className="floatingIcon floatingIcon2">
            <FaNodeJs />
          </div>
          <div className="floatingIcon floatingIcon3">
            <FaCode />
          </div>
          <div className="profileImageGlow"></div>
          <img src={me} alt="MD Jahir Mullick - Developer" />
        </div>
      </section>

      <motion.div
        className="scrollIndicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        <div className="scrollMouse">
          <div className="scrollWheel"></div>
        </div>
        <div className="scrollLine">
          <div className="scrollLineInner"></div>
        </div>
        <span className="scrollText">Scroll Down</span>
        <div className="scrollDots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
