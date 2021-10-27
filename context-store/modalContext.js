import { useState, createContext } from "react";

const ModalContext = createContext({
  modal: null,
  photo: null,
  showModal: () => {},
  hideModal: () => {},
});

export const ModalContextProvider = (props) => {
  const [modal, setModal] = useState(false);
  const [photo, setPhoto] = useState(false);

  const showModalHandler = (modalData) => {
    setModal(modalData);
    document.body.style.overflow = "hidden";
  };
  const hideModalHandler = () => {
    setModal(false);
    document.body.style.overflow = "";
  };

  const changeToPhotoHandler = (x) => {
    setPhoto(x);
  };
  const context = {
    modal: modal,
    photo: photo,
    changeToPhoto: changeToPhotoHandler,
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
