import styled, { css } from "styled-components";
import { mixin, color } from "../../../shared/utils/styles";

export const BurgerBtn = styled.div`
  width: 10rem;
  height: 100%;
  margin-left: auto;
  margin-right: 2rem;
  cursor: pointer;
  ${mixin.center}
  -webkit-tap-highlight-color: transparent;
  z-index: 10;

  @media only screen and (min-width: 1201px) {
    display: none;
  }
`;

export const BurgerBox = styled.div`
  width: 90%;
  height: 90%;
  ${mixin.center}
  flex-direction: column;
`;
export const BurgerStripe = styled.span`
  position: relative;
  width: 55%;
  display: block;
  height: 3px;
  background-color: ${(props) => (props.animate ? "wheat" : color.secondary)};
  transition-property: transform, width, background-color;
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:first-child {
    ${(props) =>
      props.animate
        ? css`
            width: 26%;
            transform: rotate(45deg) translate(0px, 8px);
          `
        : ""}
  }
  &:last-child {
    ${(props) =>
      props.animate
        ? css`
            width: 26%;
            transform: rotate(45deg) translate(0px, -8px);
          `
        : ""}
  }
  &:nth-child(2) {
    ${(props) =>
      props.animate
        ? css`
            width: 50%;
            transform: rotate(-45deg);
          `
        : ""}
  }
`;
