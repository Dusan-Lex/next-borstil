import styled from "styled-components";
import { mixin, color } from "../../shared/utils/styles";

export const StyledContactSection = styled.section`
  opacity: 0;
  animation: fadeInOpacity 1s forwards;
  text-align: center;
  @keyframes fadeInOpacity {
    100% {
      opacity: 1;
    }
  }
`;

export const ScrollInto = styled.div`
  overflow: hidden;
  margin-bottom: 4rem;
  div {
    width: 5rem;
    height: 5rem;
    background-color: ${(props) => mixin.rgba(props.theme.background, 0.7)};
    border-radius: 50%;
    margin: auto;
    ${mixin.center}
    cursor: pointer;
    transform: translateY(100%);
    opacity: 0;
    animation: fadeUp 0.5s 2s ease-out forwards;
    @keyframes fadeUp {
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    svg {
      stroke: ${(props) => mixin.rgba(props.theme.backgroundRev, 0.8)};
    }
  }
`;
