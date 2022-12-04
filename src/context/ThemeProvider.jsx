import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const dark = "dark";
  const light = "light";
  const [theme, setTheme] = useState("");

  const handleClick = () => {
    if (theme === light) {
      setTheme(dark);
      localStorage.setItem("theme", dark);
    } else {
      setTheme(light);
      localStorage.setItem("theme", light);
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme(light);
      localStorage.setItem("theme", light);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleClick }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
