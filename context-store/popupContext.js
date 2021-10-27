import { useState, useEffect, createContext } from "react";

const PopupContext = createContext({
  popup: null,
  showPopup: () => {},
  hidePopup: () => {},
});

export const PopupContextProvider = (props) => {
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    if (popup && (popup.status === "success" || popup.status === "error")) {
      const timer = setTimeout(() => {
        setPopup(null);
      }, 4000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [popup]);

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
