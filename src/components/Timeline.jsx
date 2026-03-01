import React from "react";
import data from "../assets/data.json";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <div id="timeline">
      <motion.div
        className="sectionHeader"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="sectionLabel">
          <span className="line"></span>
          EXPERIENCE
          <span className="line"></span>
        </span>
        <h2>My Journey</h2>
        <p className="sectionSubtext">Key milestones in my professional career</p>
      </motion.div>

      <div className="timelineBox">
        {data.projects
          .filter((item) => item.type === "experience")
          .map((item, index) => (
            <TimelineItem
              heading={item.title}
              text={item.date}
              index={index}
              key={item.title}
            />
          ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index }) => (
  <motion.div
    className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"}`}
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="timelineContainer">
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </motion.div>
);

export default Timeline;
