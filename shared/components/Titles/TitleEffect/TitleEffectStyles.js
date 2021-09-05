import styled from "styled-components";
import { mixin } from "../../../utils/styles";

export const TEBox = styled.div`
  ${mixin.center}
  font-size: 3.8rem;
  font-weight: 500;
  @media only screen and (max-width: 430px) {
    font-size: 3rem;
  }
`;

export const TESpan = styled.span`
  display: inline-block;
  color: ${(props) => props.color2};
  opacity: 0;
  &.one {
    transform: translate(-150px, 0) scale(0.3);
    animation: firstA-${(props) => props.id} 0.55s ${(props) => props.delay}s forwards;
    @keyframes firstA-${(props) => props.id} {
      40% {
        transform: translate(50px, 0) scale(0.7);
        opacity: 1;
        color: ${(props) => props.color2};
      }

      60% {
        color: ${(props) => props.color1};
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
    animation: secondA-${(props) => props.id} 0.3s ${(props) => props.delay}s forwards;

    @keyframes secondA-${(props) => props.id} {
      30% {
        transform: translate(0, -50px) rotate(180deg) scale(1);
      }

      60% {
        transform: translate(0, 20px) scale(0.8) rotate(0deg);
        color: ${(props) => props.color1};
      }

      100% {
        transform: translate(0) scale(1) rotate(0deg);
        opacity: 1;
      }
    }
  }

  &.three {
    transform: translate(-150px, -50px) rotate(-180deg) scale(3);
    animation: thirdA-${(props) => props.id} 0.4s ${(props) => props.delay}s forwards;

    @keyframes thirdA-${(props) => props.id} {
      60% {
        transform: translate(20px, 20px) rotate(30deg) scale(0.3);
        color: ${(props) => props.color1};
      }

      100% {
        transform: translate(0) rotate(0) scale(1);
        opacity: 1;
      }
    }
  }
`;
