import Head from "next/head";
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
            <Head>
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/site.webmanifest" />
            </Head>
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
