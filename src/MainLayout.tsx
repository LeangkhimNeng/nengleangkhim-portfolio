import React from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
const MainLayout: React.FC = () => {
  return (
    <AnimatePresence>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Footer />
    </AnimatePresence>
  );
};

export default MainLayout;
