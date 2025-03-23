import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themes = {
    dark: { background: "bg-black", text: "text-white" },
    light: { background: "bg-white", text: "text-black" },
    amber: { background: "bg-amber-400", text: "text-black" },
    sky: { background: "bg-sky-400", text: "text-white" },
    emerald: { background: "bg-emerald-400", text: "text-white" },
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
