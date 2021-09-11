import { useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar/Navbar";
import HeaderIcons from "./HeaderIcons/HeaderIcons";

import {
  Header,
  HeaderUp,
  HeaderDown,
  ThemeToggleButton,
  LangToggleButton,
  LangSpan,
  ThemeSpan,
  ShoppingCartBtnNav,
} from "./NavigationStyles";

import ThemeContext from "../../store/themeContext";
import useTranslation from "next-translate/useTranslation";
import Moon from "../../shared/components/svgs/Moon";
import Sun from "../../shared/components/svgs/Sun";

import { color } from "../../shared/utils/styles";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import BurgerButton from "./BurgerButton/BurgerButton";
import Sidebar from "./Sidebar/Sidebar";

const Navigation = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const router = useRouter();

  const { t } = useTranslation();

  const localeChangeHandler = () => {
    router.push(router.asPath, router.asPath, {
      locale: router.locale === "sr" ? "de" : "sr",
    });
  };
  const themeChangeHandler = () => {
    switchTheme();
  };

  return (
    <Header>
      <HeaderUp>
        <LangSpan>{t("common:language")}:</LangSpan>
        <LangToggleButton
          id="langMain"
          left="DE"
          right="SR"
          onChangeInput={localeChangeHandler}
          checkedInput={router.locale === "de"}
        />
        <h2>D.O.O. Bor Stil - Vrata i prozori</h2>
        <ThemeToggleButton
          id="theme"
          left={<Sun size="18" color={color.secondary} />}
          right={<Moon size="20" color={color.primary} />}
          onChangeInput={themeChangeHandler}
          checkedInput={theme === "light"}
        />
        <ThemeSpan>
          {theme === "light" ? t("common:theme.0") : t("common:theme.1")}
        </ThemeSpan>
      </HeaderUp>
      <HeaderDown>
        <HeaderLogo />
        <Navbar />
        <HeaderIcons />
        {router.route === "/products" ? <ShoppingCartBtnNav /> : null}
        <BurgerButton />
        <Sidebar />
      </HeaderDown>
    </Header>
  );
};

export default Navigation;
