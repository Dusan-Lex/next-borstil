import { useState, useEffect, createContext } from "react";

const ModalContext = createContext({
  modal: null,
  showModal: () => {},
  hideModal: () => {},
});

export const ModalContextProvider = (props) => {
  const [modal, setModal] = useState(false);

  const showModalHandler = (modalData) => {
    setModal(modalData);
    document.body.style.overflow = "hidden";
  };
  const hideModalHandler = () => {
    setModal(false);
    document.body.style.overflow = "";
  };

  const context = {
    modal: modal,
    showModal: showModalHandler,
    hideModal: hideModalHandler,
  };
  return (
    <ModalContext.Provider value={context}>
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
