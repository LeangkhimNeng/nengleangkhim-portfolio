import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex justify-between items-center text-stone-500 bg-slate-100 text-center p-10 px-36 "
    >
      <div className="gap-x-5">
        <h1 className="text-4xl font-bold">
          Hi, I'm <span>Neng Leangkhim</span>
        </h1>
        <p className="text-lg mt-2">Frontend Developer</p>
        <br />
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="px-6 py-2 bg-stone-500 text-white rounded-xl"
        >
          <Link to="/cv">My CV</Link>
        </motion.a>
      </div>
      {/* <div><img className="rounded-full shadow-2xl" width={400} src={profile}/></div> */}
    </motion.section>
  );
};

export default Header;
