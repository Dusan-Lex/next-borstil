import Head from "next/head";
import NormalizeStyles from "../styles/NormalizeStyles";
import BaseStyles from "../styles/BaseStyles";
import { useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import NewsletterRegistration from "../components/Newsletter/NewsletterRegistration";
import Footer from "../components/Footer/Footer";
import { ThemeContextProvider } from "../store/themeContext";
import { PopupContextProvider } from "../store/popupContext";
import { SidebarContextProvider } from "../store/sidebarContext";
import Theme from "../components/Theme/Theme";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     window.addEventListener("load", function () {
  //       navigator.serviceWorker.register("/sw.js").then(
  //         function (registration) {
  //           console.log(
  //             "Service Worker registration successful with scope: ",
  //             registration.scope
  //           );
  //         },
  //         function (err) {
  //           console.log("Service Worker registration failed: ", err);
  //         }
  //       );
  //     });
  //   }
  // }, []);
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
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
                rel="stylesheet"
              />

              <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&display=swap"
                rel="stylesheet"
              ></link>
            </Head>
            <NormalizeStyles />
            <BaseStyles />
            <Navigation />
            <Component {...pageProps} />
            <NewsletterRegistration />
            <Footer />
          </SidebarContextProvider>
        </PopupContextProvider>
      </Theme>
    </ThemeContextProvider>
  );
}

export default MyApp;
