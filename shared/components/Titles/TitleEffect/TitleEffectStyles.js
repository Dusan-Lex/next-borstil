import styled from "styled-components";
import { mixin, color } from "../../../utils/styles";

export const TEBox = styled.div`
  ${mixin.center}
  font-size: 3.8rem;
  font-weight: 500;
`;

export const TESpan = styled.span`
  display: inline-block;
  color: ${color.secondary};
  opacity: 0;
  &.one {
    transform: translate(-150px, 0) scale(0.3);
    animation: firstA 0.55s ${(props) => props.delay}s forwards;
    @keyframes firstA {
      40% {
        transform: translate(50px, 0) scale(0.7);
        opacity: 1;
        color: ${color.secondary};
      }

      60% {
        color: ${color.primary};
      }

      80% {
        transform: translate(0) scale(2);
        opacity: 0;
      }

      100% {
        transform: translate(0) scale(1);
        opacity: 1;
      }
    }
  }

  &.two {
    transform: translate(0, -100px) rotate(360deg) scale(0);
    animation: secondA 0.3s ${(props) => props.delay}s forwards;

    @keyframes secondA {
      30% {
        transform: translate(0, -50px) rotate(180deg) scale(1);
      }

      60% {
        transform: translate(0, 20px) scale(0.8) rotate(0deg);
        color: ${color.primary};
      }

      100% {
        transform: translate(0) scale(1) rotate(0deg);
        opacity: 1;
      }
    }
  }

  &.three {
    transform: translate(-150px, -50px) rotate(-180deg) scale(3);
    animation: thirdA 0.4s ${(props) => props.delay}s forwards;

    @keyframes thirdA {
      60% {
        transform: translate(20px, 20px) rotate(30deg) scale(0.3);
        color: ${color.primary};
      }

      100% {
        transform: translate(0) rotate(0) scale(1);
        opacity: 1;
      }
    }
  }
`;
