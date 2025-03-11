import React from "react";
import react from "../assets/react.svg";
import { motion } from "framer-motion";

const styleCard = `shadow-lg p-8 rounded-lg`;
const experience = [
  {
    logo: react,
    position: "Front-End Developer",
    company: "TURBO TECH Co., Ltd, Phnom Penh.",
    description: [
      "Dated : Nov 2021 - Feb 2024",
      "Design UI/UX using Figma.",
      "Implement using Vue2 & 3, Vuetify, CSS, SASS and Vuex",
    ],
  },
  {
    logo: react,
    position: "Front-End Developer Internship",
    company: "TURBO TECH Co., Ltd, Phnom Penh.",
    description: [
      "Dated : Nov 2020 - Feb 2021",
      "Design UI/UX using Adobe XD.",
      "Implement using Html, CSS, Bootstrap, Laravel and Php.",
    ],
  },
  {
    logo: react,
    position: "Data Migration Internship",
    company: "Anakut Digital Solutions Co., Ltd, Phnom Penh",
    description: [
      "Dated : Jul 2020 - Sep 2020",
      "Import data to Microsoft Excel",
    ],
  },
  {
    logo: react,
    position: "Graphic Designer Internship",
    company: "KCRI International Cooperation Co., Ltd, Phnom Penh.",
    description: [
      "Dated : Aug 2019 - Oct 2019",
      "Design post in facebook page using Adobe Photoshop and Adobe Illustrator.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="bg-zinc-50 text-stone-500 py-12 px-8" id="skill">
      <h2 className="text-3xl text-center font-semibold">Experience</h2>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-4 md:gap-8 gap-3 mt-8">
          {experience.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styleCard}>
                <img className="logo my-4 border-2 border-gray-100 shadow-xs rounded-2xl" src={experience.logo} />
                <div className="font-semibold">
                  <h4 className="text-stone-700">{experience.company}</h4>
                  <h4>{experience.position}</h4>
                </div>
                <ul className="list-disc text-left  text-sm leading-8 mt-4 font-light">
                  {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </motion.section>
    </section>
  );
};

export default Experience;
