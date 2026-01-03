import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <div id="projects">
        <Projects />
      </div>
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
