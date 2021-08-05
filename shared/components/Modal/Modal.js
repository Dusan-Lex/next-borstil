import { useContext } from "react";
import Image from "next/image";
import ModalContext from "../../../store/modalContext";

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
      <Backdrop />
      <ModalOverlay>{modalCtx.modal}</ModalOverlay>
      <StyledCloseButton onClose={modalCtx.hideModal} />
    </StyledModal>
  ) : null;
};

export default Modal;
