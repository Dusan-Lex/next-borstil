import NormalizeStyles from "../styles/NormalizeStyles";
import BaseStyles from "../styles/BaseStyles";
import "../styles/fontStyles.css";
import Navigation from "../components/Navigation/Navigation";
import { ThemeContextProvider } from "../store/themeContext";
import { PopupContextProvider } from "../store/popupContext";
import Theme from "../components/Theme/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Theme>
        <PopupContextProvider>
          <NormalizeStyles />
          <BaseStyles />
          <Navigation />
          <Component {...pageProps} />
        </PopupContextProvider>
      </Theme>
    </ThemeContextProvider>
  );
}

export default MyApp;
