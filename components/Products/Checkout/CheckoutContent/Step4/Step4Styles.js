import styled from "styled-components";
import { color, mixin } from "../../../../../shared/utils/styles";

export const StyledStep4 = styled.div`
  position: relative;
  height: 100%;
  ${mixin.scrollableY};
  padding: 0 3rem;

  @media only screen and (max-width: 450px) {
    padding: 0 1rem;
  }
`;

export const Payment = styled.div`
  background-color: ${color.primaryLightest};
  padding-left: 1rem;
  margin-top: 1rem;
  color: ${color.secondaryDark};
`;
