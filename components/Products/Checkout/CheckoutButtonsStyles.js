import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledCheckoutButtons = styled.div`
  height: 15%;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity ${(props) => (props.show ? "0.8s" : "0.55s")} ease-in-out;
  transition-delay: ${(props) => (props.show ? "0.5s" : "0s")};

  @media screen and (max-width: 500px) {
    width: 90%;
  }
  @media screen and (max-width: 340px) {
    width: 95%;
  }
`;
export const CheckoutButton = styled.button`
  width: 20rem;
  @media screen and (max-width: 340px) {
    width: 17rem;
  }
  background-color: ${color.primary};
  color: ${color.secondary};
  border: 2px solid transparent;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0.5rem ${(props) => (props.left ? "5rem" : "0")} 0.5rem
    ${(props) => (props.left ? "0" : "5rem")};
  cursor: pointer;
  transition: all 0.1s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  span {
    text-transform: uppercase;
  }
  svg {
    width: 2.5rem;
    stroke: ${color.secondary};
  }

  &.not-allowed {
    background-color: ${mixin.darken(color.primary, 0.3)};
    pointer-events: none;
  }

  &:active {
    background-color: ${color.secondaryLight};
    color: ${color.primaryLight};
    border-color: ${color.primaryLight};
    svg {
      stroke: ${color.primaryLight};
    }
  }
  @media screen and (min-width: 1201px) {
    &:hover {
      background-color: ${color.secondaryLight};
      color: ${color.primaryLight};
      border-color: ${color.primaryLight};
      svg {
        stroke: ${color.primaryLight};
      }
    }
    &:active {
      background-color: ${color.primary};
      color: ${color.secondary};
      border: 2px solid transparent;
      svg {
        stroke: ${color.secondary};
      }
    }
  }
`;

export const CheckoutButtonBox = styled.div``;
