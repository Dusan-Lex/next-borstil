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
  Span,
} from "./NavigationStyles";
import useHideHeaderUp from "../../shared/hooks/useHideHeaderUp";
import ThemeContext from "../../store/themeContext";
import useTranslation from "next-translate/useTranslation";
import Moon from "../../shared/components/svgs/Moon";
import Sun from "../../shared/components/svgs/Sun";

import useWindowSize from "../../shared/hooks/useWindowSize";
import { color } from "../../shared/utils/styles";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Navigation = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const router = useRouter();
  let { t } = useTranslation();
  const hideHeaderUp = useHideHeaderUp();
  const windowSize = useWindowSize();
  const newTheme = theme === "light" ? "dark" : "light";

  const localeChangeHandler = () => {
    router.push(router.asPath, router.asPath, {
      locale: router.locale === "sr" ? "de" : "sr",
    });
  };
  const themeChangeHandler = () => {
    switchTheme(newTheme);
  };

  return (
    <Header hideHeaderUp={hideHeaderUp && windowSize.width > 1200}>
      <HeaderUp>
        <Span>{t("common:language")}:</Span>
        <LangToggleButton
          id="lang"
          left="DE"
          right="SR"
          onChangeInput={localeChangeHandler}
        />
        <h2>D.O.O. Bor Stil</h2>
        <ThemeToggleButton
          id="theme"
          onChangeInput={themeChangeHandler}
          left={<Sun size="18" color={color.secondary} />}
          right={<Moon size="20" color={color.primary} />}
        />
      </HeaderUp>
      <HeaderDown>
        <HeaderLogo />
        <Navbar />
        <HeaderIcons />
      </HeaderDown>
    </Header>
  );
};

export default Navigation;
