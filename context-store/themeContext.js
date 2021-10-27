import { useState, useEffect, createContext } from "react";
import useWindowSize from "../shared/hooks/useWindowSize";
const ThemeContext = createContext({
  theme: null,
  switchTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("dark");
  const windowSize = useWindowSize();

  useEffect(() => {
    windowSize.width && windowSize.width <= 1200 && setTheme("light");
    windowSize.width > 1200 && setTheme("dark");
  }, [windowSize.width]);

  const switchThemeHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const context = {
    theme: theme,
    switchTheme: switchThemeHandler,
  };
  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
