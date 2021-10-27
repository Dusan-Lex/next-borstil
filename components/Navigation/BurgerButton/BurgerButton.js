import React, { useContext } from "react";
import SidebarContext from "../../../context-store/sidebarContext";
import { BurgerBtn, BurgerBox, BurgerStripe } from "./BurgerButtonStyles";
const BurgerButton = () => {
  const sidebarCtx = useContext(SidebarContext);
  return (
    <BurgerBtn onClick={sidebarCtx.toggleSidebar}>
      <BurgerBox>
        {[0, 1, 2].map((item) => (
          <BurgerStripe key={item} animate={sidebarCtx.sidebar} />
        ))}
      </BurgerBox>
    </BurgerBtn>
  );
};

export default BurgerButton;
