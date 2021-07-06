import styled from "styled-components";
import { color, mixin } from "../../shared/utils/styles";

export const Loading = styled.div`
  ${mixin.coverViewport};
  z-index: 99999;
  background-color: ${color.secondaryDark};
  ${mixin.center}
  color: ${color.primaryLightest};
  transition: all 0.4s linear;

  &.out-1 {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s 0.7s ease;
  }

  div {
    overflow: hidden;
    @media screen and (max-width: 600px) {
      transform: translateY(-3.5vh);
    }
    h1 {
      font-family: serif;
      font-size: 2.5rem;
      font-weight: 500;
      letter-spacing: 0.5rem;
      text-transform: uppercase;
      color: ${color.primaryLightest};
      animation: in 1s 0.4s backwards;
      @keyframes in {
        0% {
          transform: translateY(100%);
        }
        100% {
          transform: translateY(0);
        }
      }
    }

    .out-2 {
      animation: out 0.7s ease forwards;
      @keyframes out {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(100%);
          opacity: 0;
        }
      }
    }
  }
`;
