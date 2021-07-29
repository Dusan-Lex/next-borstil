import styled from "styled-components";
import { color } from "../../utils/styles";

export const StyledImaginedHeader = styled.div`
  background-color: ${color.primaryLightest};
  .up {
    height: 4vh;
    min-height: 3rem;
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }
  .down {
    height: 6vh;
    min-height: 5.5rem;
    @media only screen and (max-width: 600px) {
      height: 8.5vh;
    }
  }
`;
