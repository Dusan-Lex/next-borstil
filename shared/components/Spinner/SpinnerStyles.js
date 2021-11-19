import styled from "styled-components";
import { color } from "../../utils/styles";
export const Roller = styled.div`
  margin: auto;
  border: 0.4rem solid ${color.primaryLightest};
  border-radius: 50%;
  border-top-color: ${color.primaryDark};
  width: 2.6rem;
  height: 2.6rem;
  animation: rotate-spinner 1s linear;
  animation-iteration-count: infinite;

  @keyframes rotate-spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;
