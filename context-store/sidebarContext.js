import { useState, createContext } from "react";

const SidebarContext = createContext({
  sidebar: null,
  toggleSidebar: () => {},
});

export const SidebarContextProvider = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebarHandler = () => {
    setSidebar((prevSidebar) => {
      document.body.style.overflow = !prevSidebar ? "hidden" : "";
      return !prevSidebar;
    });
  };

  const context = {
    sidebar: sidebar,
    toggleSidebar: toggleSidebarHandler,
  };
  return (
    <SidebarContext.Provider value={context}>
      {props.children}
    </SidebarContext.Provider>
  );
};
export default SidebarContext;
