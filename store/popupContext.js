import { useState, createContext } from "react";

const PopupContext = createContext({
  popup: null,
  showPopup: () => {},
  hidePopup: () => {},
});

export const PopupContextProvider = (props) => {
  const [popup, setPopup] = useState(null);

  const showPopupHandler = (popupData) => {
    setPopup(popupData);
  };
  const hidePopupHandler = () => {
    setPopup(null);
  };

  const context = {
    popup: popup,
    showPopup: showPopupHandler,
    hidePopup: hidePopupHandler,
  };
  return (
    <PopupContext.Provider value={context}>
      {props.children}
    </PopupContext.Provider>
  );
};
export default PopupContext;
