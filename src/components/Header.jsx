import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";

const Header = ({ activeSection }) => {
  const { theme, setTheme, themes } = useTheme();

  const themeColors = [
    { color: "bg-amber-400", theme: "amber" },
    { color: "bg-black", theme: "dark" },
    { color: "bg-sky-400", theme: "sky" },
    { color: " bg-emerald-400", theme: "emerald" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[60px] flex items-center fixed top-0 left-0 right-0 p-3 z-[9999] backdrop-blur-xl"
    >
      <div className="w-full flex items-center justify-between h-full">
        <div className="flex items-center absolute top-0 left-1/2 h-6 cursor-pointer gap-0.5">
          {themeColors.map(({ color, theme: themeName }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              onClick={() => setTheme(themeName)}
              className={`${color} text-white font-bold text-lg px-2 h-5 flex items-center rounded-full`}
            >
              •
            </motion.div>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
