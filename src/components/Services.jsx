import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle } from "react-icons/ai";
import { SiAzurepipelines } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const skills = [
    { img: `${DI}/react/react-original.svg`, name: "React.js", color: "#61dafb", glow: "rgba(97, 218, 251, 0.3)" },
    { img: `${DI}/react/react-original.svg`, name: "React Native", color: "#61dafb", glow: "rgba(97, 218, 251, 0.3)" },
    { img: `${DI}/nodejs/nodejs-original.svg`, name: "Node.js", color: "#68a063", glow: "rgba(104, 160, 99, 0.3)" },
    { img: `${DI}/mongodb/mongodb-original.svg`, name: "MongoDB", color: "#47a248", glow: "rgba(71, 162, 72, 0.3)" },
    { img: `${DI}/express/express-original.svg`, name: "Express.js", color: "#ffffff", glow: "rgba(255, 255, 255, 0.15)", invert: true },
    { img: `${DI}/javascript/javascript-original.svg`, name: "JavaScript", color: "#f7df1e", glow: "rgba(247, 223, 30, 0.3)" },
    { img: `${DI}/typescript/typescript-original.svg`, name: "TypeScript", color: "#3178c6", glow: "rgba(49, 120, 198, 0.3)" },
    { img: `${DI}/html5/html5-original.svg`, name: "HTML5", color: "#e34c26", glow: "rgba(227, 76, 38, 0.3)" },
    { img: `${DI}/css3/css3-original.svg`, name: "CSS3", color: "#264de4", glow: "rgba(38, 77, 228, 0.3)" },
    { img: `${DI}/redux/redux-original.svg`, name: "Redux", color: "#764abc", glow: "rgba(118, 74, 188, 0.3)" },
    {
      img: "https://tanstack.com/images/logos/splash-dark.png",
      name: "TanStack Query",
      color: "#e8590c",
      glow: "rgba(232, 89, 12, 0.3)"
    },
    { img: `${DI}/git/git-original.svg`, name: "Git", color: "#f05032", glow: "rgba(240, 80, 50, 0.3)" },
    { img: `${DI}/github/github-original.svg`, name: "GitHub", color: "#ffffff", glow: "rgba(255, 255, 255, 0.15)", invert: true },
    { img: `${DI}/gitlab/gitlab-original.svg`, name: "GitLab", color: "#fc6d26", glow: "rgba(252, 109, 38, 0.3)" },
    { img: `${DI}/androidstudio/androidstudio-original.svg`, name: "Android Studio", color: "#3ddc84", glow: "rgba(61, 220, 132, 0.3)" },
    { img: `${DI}/postman/postman-original.svg`, name: "Postman", color: "#ff6c37", glow: "rgba(255, 108, 55, 0.3)" },
    { img: `${DI}/mysql/mysql-original-wordmark.svg`, name: "MySQL", color: "#4479a1", glow: "rgba(68, 121, 161, 0.3)", invert: true },
    { img: `${DI}/supabase/supabase-original.svg`, name: "Supabase", color: "#3ecf8e", glow: "rgba(62, 207, 142, 0.3)" },
    { img: `${DI}/firebase/firebase-original.svg`, name: "Firebase", color: "#ffca28", glow: "rgba(255, 202, 40, 0.3)" },
    { img: `${DI}/figma/figma-original.svg`, name: "Figma", color: "#f24e1e", glow: "rgba(242, 78, 30, 0.3)" },
    { img: `${DI}/notion/notion-original.svg`, name: "Notion", color: "#ffffff", glow: "rgba(255, 255, 255, 0.15)", invert: true },
  ];

  return (
    <div id="services">
      <motion.div
        className="sectionHeader"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="sectionLabel">
          <span className="line"></span>
          MY SKILLS
          <span className="line"></span>
        </span>
        <h2>Technologies I Work With</h2>
        <p className="sectionSubtext">A powerful toolkit for building modern web applications</p>
      </motion.div>

      <motion.div
        className="skillsGrid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div
            className="skillCard"
            key={skill.name}
            variants={itemVariants}
            style={{ "--skill-color": skill.color, "--skill-glow": skill.glow }}
          >
            <span className="skillIcon">
              <img
                src={skill.img}
                alt={skill.name}
                className={skill.invert ? "invertIcon" : ""}
              />
            </span>
            <span className="skillName">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="experienceRow"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="expCard" variants={itemVariants}>
          <h3>3</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div className="expCard" variants={itemVariants}>
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div className="expCard" variants={itemVariants}>
          <SiAzurepipelines />
          <span>Mobile Development</span>
        </motion.div>
        <motion.div className="expCard" variants={itemVariants}>
          <FaReact />
          <span>React Development</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
