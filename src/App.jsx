import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Chatbot from "./components/Chatbot";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, themes } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black text-white"
    >
      <div
        className={`${themes[theme].background} ${themes[theme].text} ${themes[theme].border}`}
      >
        <Header />
        <Hero
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <AboutMe />
        <Services />
        <Skills />
        <Experiences />
        <Education />
        <Projects />
        <Contact />
        <Chatbot />
      </div>
    </motion.div>
  );
}

export default App;
