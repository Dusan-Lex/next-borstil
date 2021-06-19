import { useState, createContext } from "react";

const PopupContext = createContext({
  popup: null,
  switchPopup: () => {},
});

export const PopupContextProvider = (props) => {
  const [popup, setPopup] = useState(false);

  const switchPopupHandler = () => {
    setPopup(!popup);
  };
  console.log(popup);
  const context = {
    popup: popup,
    switchPopup: switchPopupHandler,
  };
  return (
    <PopupContext.Provider value={context}>
      {props.children}
    </PopupContext.Provider>
  );
};
export default PopupContext;
