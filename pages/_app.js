import NormalizeStyles from "../styles/NormalizeStyles";
import BaseStyles from "../styles/BaseStyles";
import "../styles/fontStyles.css";
import Navigation from "../components/Navigation/Navigation";
import { ThemeContextProvider } from "../store/themeContext";
import { PopupContextProvider } from "../store/popupContext";
import { SidebarContextProvider } from "../store/sidebarContext";
import Theme from "../components/Theme/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Theme>
        <PopupContextProvider>
          <SidebarContextProvider>
            <NormalizeStyles />
            <BaseStyles />
            <Navigation />
            <Component {...pageProps} />
          </SidebarContextProvider>
        </PopupContextProvider>
      </Theme>
    </ThemeContextProvider>
  );
}

export default MyApp;
