import { useContext } from "react";
import SidebarContext from "../../../store/sidebarContext";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import SidebarItem from "./SidebarItem/SidebarItem";
import {
  SidebarBack,
  SidebarFront,
  StyledSidebar,
  SidebarBox,
  SidebarItems,
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
  return (
    <StyledSidebar>
      <SidebarBack
        show={sidebarCtx.sidebar}
        onClick={sidebarCtx.toggleSidebar}
      />
      <SidebarFront show={sidebarCtx.sidebar}>
        <SidebarBox>
          <SidebarItems>
            {sidebarData.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
          </SidebarItems>
          <HeaderIcons small />
        </SidebarBox>
      </SidebarFront>
    </StyledSidebar>
  );
};

export default Sidebar;
