import Head from "next/head";
import NormalizeStyles from "../styles/NormalizeStyles";
import BaseStyles from "../styles/BaseStyles";
import Navigation from "../components/Navigation/Navigation";
import NewsletterRegistration from "../components/Newsletter/NewsletterRegistration";
import Footer from "../components/Footer/Footer";
import { ThemeContextProvider } from "../context-store/themeContext";
import { PopupContextProvider } from "../context-store/popupContext";
import { SidebarContextProvider } from "../context-store/sidebarContext";
import Theme from "../components/Theme/Theme";
import { ModalContextProvider } from "../context-store/modalContext";
import Modal from "../shared/components/Modal/Modal";
import { DoorContextProvider } from "../context-store/doorContext";
import { CheckoutContextProvider } from "../context-store/checkoutContext";
import { OrderContextProvider } from "../context-store/orderContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Theme>
        <PopupContextProvider>
          <SidebarContextProvider>
            <CheckoutContextProvider>
              <ModalContextProvider>
                <DoorContextProvider>
                  <OrderContextProvider>
                    <Head>
                      <title>BorStil | Vrata i prozori | Leskovac</title>
                      <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                      />
                      <meta charSet="utf-8" />
                      <meta
                        name="description"
                        content="Vrata i prozori | Leskovac | BorStil se bavi proizvodnjom stolarije i galanterije od drveta. U ponudi imamo veliki izbor različitih vrsta vrata i prozora."
                      />
                      <meta
                        property="og:title"
                        content="BorStil | Vrata i prozori | Leskovac"
                      />
                      <meta
                        property="og:description"
                        content="Vrata i prozori | Leskovac | BorStil se bavi proizvodnjom stolarije i galanterije od drveta. U ponudi imamo veliki izbor različitih vrsta vrata i prozora."
                      />
                      <meta
                        property="og:url"
                        content="https://borstil.vercel.app/"
                      />
                      <meta property="og:type" content="website" />

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
                      <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                      />
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
                    <Modal />
                    <Navigation />
                    <Component {...pageProps} />
                    <NewsletterRegistration />
                    <Footer />
                  </OrderContextProvider>
                </DoorContextProvider>
              </ModalContextProvider>
            </CheckoutContextProvider>
          </SidebarContextProvider>
        </PopupContextProvider>
      </Theme>
    </ThemeContextProvider>
  );
}

export default MyApp;
