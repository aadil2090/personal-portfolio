import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";

const navItems = [
  { id: "top", label: "TOP", num: "01" },
  { id: "aboutme", label: "ABOUT ME", num: "02" },
  { id: "services", label: "MY SERVICES", num: "03" },
  { id: "skills", label: "SKILLS", num: "04" },
  { id: "experiences", label: "EXPERIENCES", num: "05" },
  { id: "projects", label: "PROJECTS", num: "06" },
  { id: "contact", label: "CONTACT", num: "07" },
];

const Hero = ({ activeSection }) => {
  const { theme, themes } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      className={`h-screen flex items-center ${themes[theme].background} ${themes[theme].text}`}
      id="top"
    >
      <div className="px-8 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <img
              src="../../public/Profile.jpg"
              className="w-40 rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold"
          >
            <span>Aadil</span>
            <span className="block">Shaikh</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              className="mt-2 h-[2px] bg-white"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="font-bold mt-4 text-lg"
          >
            FRONT-END WEB DEVELOPER
          </motion.div>
          <motion.button
           variants={itemVariants} 
            whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
            className="mt-8 bg-white text-black px-8 py-3 cursor-pointer rounded-lg shadow-lg"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Aadil_Shaikh_Resume.pdf";
              link.download = "Aadil_Shaikh_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download CV
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="fixed right-12 top-36"
        >
          <div className="leading-12 font-bold text-2xl flex flex-col">
            {navItems.map((nav) => (
              <motion.a
                key={nav.id}
                whileHover={{
                  borderLeftColor: "#fff",
                }}
                transition={{ duration: 0.3 }}
                className={`flex items-center cursor-pointer group border-l-2 pl-6 transition-all duration-300 ${
                  activeSection === nav.id
                    ? "border-l-white opacity-100"
                    : "border-l-gray-600 opacity-70"
                }`}
                onClick={() => scrollToSection(nav.id)}
              >
                <span className="mr-4 font-medium text-xl opacity-60 group-hover:opacity-100 transition-opacity">
                  {nav.num}
                </span>
                <span className="tracking-[0.2em] group-hover:opacity-100 transition-opacity">
                  {nav.label}
                </span>
              </motion.a>
            ))}
          </div>
          <div className="pt-8 pl-6 border-l-2 border-l-gray-600">
            <div>shaikhaadil3927@gmail.com</div>
            <div>+91-79905 12804</div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
