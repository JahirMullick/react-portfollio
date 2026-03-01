import React from "react";
import data from "../assets/data.json";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Work = () => {
  const projects = data.projects.filter((p) => p.type === "project");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div id="work">
      <motion.div
        className="sectionHeader"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="sectionLabel">
          <span className="line"></span>
          MY WORK
          <span className="line"></span>
        </span>
        <h2>Featured Projects</h2>
        <p className="sectionSubtext">
          {projects.length}+ projects I've built throughout my journey
        </p>
      </motion.div>

      <motion.div
        className="projectsGrid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="projectCard"
            variants={cardVariants}
          >
            {/* Centered icon/image */}
            <div className="projectIconWrap">
              <img src={project.imgSrc} alt={project.title} />
            </div>

            {/* Title */}
            <h3 className="projectTitle">{project.title}</h3>

            {/* Description */}
            <p className="projectDesc">{project.description}</p>

            {/* Tech Tags - green outlined pills */}
            <div className="projectTags">
              {project.tags &&
                project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
            </div>

            {/* Action Links */}
            {project.url && (
              <div className="projectLinks">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platformBadge"
                >
                  {project.url.includes("github") ? (
                    <>
                      <FaGithub /> GitHub
                    </>
                  ) : (
                    <>
                      <FaExternalLinkAlt /> Live Demo
                    </>
                  )}
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
