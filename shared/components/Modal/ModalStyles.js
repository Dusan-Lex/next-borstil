import styled from "styled-components";
import { mixin, color } from "../../utils/styles";
import CloseButton from "../Buttons/CloseButton/CloseButton";

export const StyledModal = styled.div`
  ${mixin.coverViewport}
  z-index: 101;
`;

export const Backdrop = styled.div`
  ${mixin.coverParent}
  background-color: ${mixin.rgba(color.secondaryDarkest, 0.8)};
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 10%;
  left: 20%;
  width: 60%;
  height: 80%;
  background-color: transparent;
  animation: slide-down 300ms ease-out forwards;
  ${mixin.center}

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: 600px) {
    top: 25%;
    left: 7%;
    width: 86%;
    height: 50%;
  }
`;

export const StyledCloseButton = styled(CloseButton)`
  position: fixed;
  top: 4rem;
  right: 4rem;
`;
