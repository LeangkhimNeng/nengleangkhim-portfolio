import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Mbanq Project", description: "Built with Vue2 & 3." },
  { title: "Website", description: "Built with HTML, CSS and Laravel." },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-10 bg-cyan-200  text-center">
      <h2 className="text-3xl font-bold">Projects</h2>
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 shadow-md inset-ring-1 inset-ring-[#B48811] rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl  font-semibold">{project.title}</h3>
            <p className="">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
