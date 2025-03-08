// import React from "react";

// const skills: string[] = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind", "Node.js"];

// const Skills: React.FC = () => {
//   return (
//     <section id="skills" className="p-10 ml-[80px] md:ml-[250px]">
//       <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//         {skills.map((skill, index) => (
//           <div key={index} className="p-4 bg-gray-200 rounded-lg text-center">{skill}</div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { motion } from "framer-motion";

const Skills: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.2 }}
  >
    <section className="bg-zinc-50 text-stone-500 py-12 px-8" id="skill">
      <h2 className="text-3xl text-center font-semibold">
        Skills
      </h2>
      <div className="grid grid-cols-4 gap-8 mt-8 text-center">
        <div className="shadow-lg p-8 rounded-lg">
          HTML
        </div>
        <div className="shadow-lg p-8 rounded-lg">
          CSS
        </div>
        <div className="shadow-lg p-8 rounded-lg">
          TailwindCSS
        </div>
        <div className="shadow-lg p-8 rounded-lg">
          VueJS
        </div>
        <div className="shadow-lg p-8 rounded-lg">
          Vuetify
        </div>
        <div className="shadow-lg p-8 rounded-lg">
          Javascript
        </div>
        <div className="shadow-lg p-8 rounded-lg">
          NodeJs
        </div>
        <div className="shadow-lg p-8 rounded-lg">
          
        </div>
      </div>
    </section>
  </motion.section>
);

export default Skills;
