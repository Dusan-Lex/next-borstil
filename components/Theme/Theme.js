import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "../../store/themeContext";

const themes = {
  light: {
    background: "#de9e48",
    backgroundRev: "#563727",
    backgroundAbout: "#de9e48",
    text: {
      regular: "#563727",
      regularRev: "#faf1e4",
      hover: "#faf1e4",
      slider: "#b16e17",
      sliderRev: "#563727",
    },
    //   primaryDark: "#b16e17",
    //   primaryLight: "#f5deb3",
    //   primaryLightest: "#faf1e4",
    //   secondaryDarkest: "#272223",
    //   secondaryDark: "#372c2e",

    //   secondaryLight: "#7a431d",
  },
  dark: {
    //   primaryDark: "#b16e17",
    background: "#563727",
    backgroundRev: "#de9e48",
    backgroundAbout: "#faf1e4",
    text: {
      regular: "#faf1e4",
      regularRev: "#563727",
      hover: "#de9e48",
      slider: "#563727",
      sliderRev: "#b16e17",
    },
    //   primaryLight: "#f5deb3",
    //   primaryLightest: "#faf1e4",
    //   secondaryDarkest: "#272223",
    //   secondaryDark: "#372c2e",

    //   secondaryLight: "#7a431d",
  },
};

const Theme = (props) => {
  const { theme } = useContext(ThemeContext);
  return <ThemeProvider theme={themes[theme]}>{props.children}</ThemeProvider>;
};

export default Theme;
