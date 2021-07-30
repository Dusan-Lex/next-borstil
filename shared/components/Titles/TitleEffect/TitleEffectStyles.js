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
  transform: translate(-150px, 0) scale(0.3);
  animation: leftRight 0.55s ${(props) => props.delay}s forwards;
  @keyframes leftRight {
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
`;
