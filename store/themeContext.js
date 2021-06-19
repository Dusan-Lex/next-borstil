import { useState, createContext } from "react";

const ThemeContext = createContext({
  theme: null,
  switchTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("dark");

  const switchThemeHandler = (theme) => {
    setTheme(theme);
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
