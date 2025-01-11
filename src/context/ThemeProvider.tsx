import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { THEME } from "../types";

interface ThemeContextType {
  theme: THEME;
  handleClick: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: THEME.LIGHT,
  handleClick: () => { }
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<THEME>(THEME.LIGHT);

  const handleClick = () => {
    if (theme === THEME.LIGHT) {
      setTheme(THEME.DARK);
      localStorage.setItem("theme", THEME.DARK);
    } else {
      setTheme(THEME.LIGHT);
      localStorage.setItem("theme", THEME.LIGHT);
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as THEME;
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme(THEME.LIGHT);
      localStorage.setItem("theme", THEME.LIGHT);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleClick }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
