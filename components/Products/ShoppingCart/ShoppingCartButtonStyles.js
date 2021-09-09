import styled from "styled-components";
import ShoppingCartSvg from "../../../shared/components/svgs/Shopping-Cart";
import { mixin, color } from "../../../shared/utils/styles";

export const ShoppingCartBtn = styled.button`
  border-radius: 2px;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme.background};
  ${mixin.center}
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  @media only screen and (max-width: 600px) {
    padding: 0.5rem 1rem;
    background-color: ${color.secondary};
  }

  span {
    font-size: 2.3rem;
    font-weight: 600;
    border-radius: 2px;
    min-width: 4.5rem;
    padding: 0 0.5rem;
    border: 0.25rem solid ${(props) => props.theme.backgroundRev};
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.backgroundRev};
    @media only screen and (max-width: 600px) {
      border-color: ${color.primary};
      background-color: ${color.secondary};
      color: ${color.primary};
    }
  }
  svg {
    margin-left: 0.5rem;
    width: 4rem;
    height: 2.8rem;
    stroke: ${(props) => props.theme.backgroundRev};
    @media only screen and (max-width: 600px) {
      stroke: ${color.primary};
    }
  }

  &:active {
    background-color: ${(props) => props.theme.backgroundRev};
    @media only screen and (max-width: 600px) {
      background-color: ${color.primary};
    }

    svg {
      stroke: ${(props) => props.theme.background};
      @media only screen and (max-width: 600px) {
        stroke: ${color.secondary};
      }
    }
  }

  @media only screen and (min-width: 1201px) {
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
