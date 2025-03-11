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
      <div className="flex justify-between mt-6">
        <p className="mt-4 w-2/4 text-justify">
          Web Developer specializing in Front-End Development. I am a skilled
          Front-end Developer with 2 years of experience in designing,
          developing, and maintaining front-end web applications using VueJS.
          Open-minded and motivated Information and Communication engineer
          striving to improve through research and challenges.
        </p>
        <div className="flex justify-center items-center">profile</div>
      </div>
    </motion.section>
  );
};

export default About;
