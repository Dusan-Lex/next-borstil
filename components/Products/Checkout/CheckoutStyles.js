import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledCheckout = styled.div``;

export const CheckoutBack = styled.div`
  ${mixin.coverParent};
  background-color: ${color.backdrop};
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: all 0.7s ease-in-out;
  z-index: 10;
`;

export const CheckoutFront = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  max-width: 600px;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  z-index: 10;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 1s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
    transform: ${(props) => (props.show ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: left;
  }

  &::before {
    background-color: ${color.primary};
    transition: transform 0.4s ease-in-out;
  }
  &::after {
    background-color: ${color.secondary};
    transition: transform 0.7s 0.3s ease-in-out;
  }
`;

export const ProgressContent = styled.div`
  height: 64%;
  margin: 1rem 3rem;
  border-radius: 5px;
  padding: 3rem;
  background-color: ${color.primary};
  color: ${color.secondary};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity ${(props) => (props.show ? "0.8s" : "0.55s")} ease-in-out;
  transition-delay: ${(props) => (props.show ? "0.5s" : "0s")};

  @media screen and (max-width: 500px) {
    margin: 1rem 1.5rem;
  }
`;
