import { useContext } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import SidebarContext from "../../../store/sidebarContext";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import SidebarItem from "./SidebarItem/SidebarItem";
import { Span, LangToggleButton } from "../NavigationStyles";
import {
  SidebarBack,
  SidebarFront,
  StyledSidebar,
  SidebarBox,
  SidebarItems,
  Lang,
} from "./SidebarStyles";

const sidebarData = [
  "home",
  "about",
  "products",
  "gallery",
  "contact",
  "request",
];

const Sidebar = () => {
  const sidebarCtx = useContext(SidebarContext);
  const router = useRouter();
  const { t } = useTranslation();

  const localeChangeHandler = () => {
    router.push(router.asPath, router.asPath, {
      locale: router.locale === "sr" ? "de" : "sr",
    });
  };

  return (
    <StyledSidebar>
      <SidebarBack
        show={sidebarCtx.sidebar}
        onClick={sidebarCtx.toggleSidebar}
      />
      <SidebarFront show={sidebarCtx.sidebar}>
        <SidebarBox>
          <div style={{ overflow: "hidden" }}>
            <Lang sidebar={sidebarCtx.sidebar}>
              <Span sidebar={sidebarCtx.sidebar}>{t("common:language")}:</Span>
              <LangToggleButton
                id="lang"
                left="DE"
                right="SR"
                onChangeInput={localeChangeHandler}
                checkedInput={router.locale === "de"}
              />
            </Lang>
          </div>

          <SidebarItems>
            {sidebarData.map((item, index) => (
              <SidebarItem key={index} item={item} index={index} />
            ))}
          </SidebarItems>
          <HeaderIcons small />
        </SidebarBox>
      </SidebarFront>
    </StyledSidebar>
  );
};

export default Sidebar;
