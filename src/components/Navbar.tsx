import React, { useState, useEffect } from "react";
// import profile from "../assets/profile.png";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full flex md:justify-between justify-center items-center transition-all  duration-300 p-4 px-20 ${
        isScrolled ? "bg-stone-500 shadow-lg text-white z-50" : "bg-transparent "
      }`}
    >
      <h1
        className={`text-2xl font-bold gap-4  flex justify-baseline text-center items-center ${
          isScrolled ? " text-white" : "text-stone-500 "
        }`}
      >
        {/* <img className="rounded-full shadow-2xl bg-amber-100" width={80} src={profile} /> */}
        My Portfolio
      </h1>
      <div className="justify-around gap-6 hidden md:flex text-lg">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skill">Skill</a>
        <a href="#projects">Project</a>
        <a href="#footer">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
