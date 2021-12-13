import styled from "styled-components";
import { color } from "../../utils/styles";
export const Roller = styled.div`
  margin: auto;
  border: 0.4rem solid ${color.primaryLightest};
  border-radius: 50%;
  border-top-color: ${color.primaryDark};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: rotate-spinner 1s linear;
  animation-iteration-count: infinite;

  @keyframes rotate-spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;
