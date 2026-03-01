import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle } from "react-icons/ai";
import { SiAzurepipelines, SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const skills = [
    { icon: <FaReact />, name: "React.js", color: "#61dafb", glow: "rgba(97, 218, 251, 0.3)" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#68a063", glow: "rgba(104, 160, 99, 0.3)" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47a248", glow: "rgba(71, 162, 72, 0.3)" },
    { icon: <SiExpress />, name: "Express.js", color: "#ffffff", glow: "rgba(255, 255, 255, 0.15)" },
    { icon: <FaJs />, name: "JavaScript", color: "#f7df1e", glow: "rgba(247, 223, 30, 0.3)" },
    { icon: <FaHtml5 />, name: "HTML5", color: "#e34c26", glow: "rgba(227, 76, 38, 0.3)" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "#264de4", glow: "rgba(38, 77, 228, 0.3)" },
    { icon: <FaGitAlt />, name: "Git", color: "#f05032", glow: "rgba(240, 80, 50, 0.3)" },
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
            <span className="skillIcon">{skill.icon}</span>
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
          <h3>2+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div className="expCard" variants={itemVariants}>
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div className="expCard" variants={itemVariants}>
          <SiAzurepipelines />
          <span>ETL Development</span>
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
