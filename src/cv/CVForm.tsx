import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CV: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {" "}
      <div
        id="header"
        className={`w-full bg-black flex justify-between items-center  duration-300 p-4 px-20 
   }`}
      >
        <h1 className="text-xl font-bold text-[#B48811] gap-4  flex justify-baseline text-center items-center">
          {/* <img className="rounded-full shadow-2xl bg-amber-100" width={80} src={profile} /> */}
          <Link to="/">Back Home</Link>
        </h1>
        <div className="justify-around gap-6 hidden md:flex text-white text-lg">
          <nav>
            
          </nav>
        </div>
      </div>
      <motion.div
        animate={{ width: open ? 250 : 80 }}
        className="h-screen bg-gray-900 text-white fixed flex flex-col items-center p-4 transition-all"
      >
        <button onClick={() => setOpen(!open)} className="mb-6">
          {open ? "➖" : "➕"}
        </button>
        <ul className="space-y-4">
          <li>
            <a href="#hero" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default CV;
