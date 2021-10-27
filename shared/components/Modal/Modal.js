import { useContext } from "react";
import Image from "next/image";
import ModalContext from "../../../context-store/modalContext";

import {
  StyledModal,
  Backdrop,
  ModalOverlay,
  StyledCloseButton,
} from "./ModalStyles";

const Modal = () => {
  const modalCtx = useContext(ModalContext);
  return modalCtx.modal ? (
    <StyledModal>
      <Backdrop
        onClick={() => {
          if (!modalCtx.photo) {
            modalCtx.hideModal();
          }
        }}
      />
      <ModalOverlay photo={modalCtx.photo}>{modalCtx.modal}</ModalOverlay>
      {modalCtx.photo ? (
        <StyledCloseButton onClose={modalCtx.hideModal} />
      ) : null}
    </StyledModal>
  ) : null;
};

export default Modal;
