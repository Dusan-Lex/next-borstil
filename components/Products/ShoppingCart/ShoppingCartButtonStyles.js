import styled from "styled-components";
import ShoppingCartSvg from "../../../shared/components/svgs/Shopping-Cart";
import { mixin, color } from "../../../shared/utils/styles";

export const ShoppingCartBtn = styled.button`
  border-radius: 2px;
  padding: 0.75rem 1rem;
  background-color: ${color.secondary};
  ${mixin.center}
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  span {
    width: 4rem;
    font-size: 2.3rem;
    font-weight: 600;
    border-radius: 2px;
    border: 0.25rem solid ${(props) => props.theme.backgroundRev};
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.backgroundRev};
  }
  svg {
    margin-left: 0.5rem;
    width: 4rem;
    height: 2.8rem;
    stroke: ${(props) => props.theme.backgroundRev};
  }
  &:active {
    background-color: ${color.primary};

    svg {
      stroke: ${color.secondary};
    }
  }
  @media (hover: hover) and (pointer: fine) {
    background-color: ${(props) => props.theme.background};
    &:hover {
      background-color: ${(props) => props.theme.backgroundRev};

      svg {
        stroke: ${(props) => props.theme.background};
        .sc_0 {
          stroke-dasharray: 7 9;
          stroke-dashoffset: 8;
          animation: sc-animate 666ms linear 0ms forwards;
        }
        .sc_1 {
          stroke-dasharray: 7 9;
          stroke-dashoffset: 8;
          animation: sc-animate 666ms linear 166ms forwards;
        }
        .sc_2 {
          stroke-dasharray: 52 54;
          stroke-dashoffset: 53;
          animation: sc-animate 666ms linear 0ms forwards;
        }
        @keyframes sc-animate {
          100% {
            stroke-dashoffset: 0;
          }
        }
      }
    }
    &:active {
      background-color: ${(props) => props.theme.background};

      svg {
        stroke: ${(props) => props.theme.backgroundRev};
      }
    }
  }
`;

export const ShoppingCartSvgAnimate = styled(ShoppingCartSvg)`
  .sc_0 {
    stroke-dasharray: 7 9;
    stroke-dashoffset: 8;
    animation: sc-animate 666ms linear 0ms forwards;
  }
  .sc_1 {
    stroke-dasharray: 7 9;
    stroke-dashoffset: 8;
    animation: sc-animate 666ms linear 166ms forwards;
  }
  .sc_2 {
    stroke-dasharray: 52 54;
    stroke-dashoffset: 53;
    animation: sc-animate 666ms linear 0ms forwards;
  }
  @keyframes sc-animate {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;
