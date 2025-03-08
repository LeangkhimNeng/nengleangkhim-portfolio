import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="p-10 bg-blue-100 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-3xl font-bold ">About Me</h2>
      <p className="mt-4 ">
        I am a passionate web developer with experience in modern frontend and backend technologies.
      </p>
    </motion.section>
  );
};

export default About;
