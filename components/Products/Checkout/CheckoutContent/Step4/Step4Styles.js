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

export const SpinnerBox = styled.div`
  height: 100%;
  ${mixin.center}
  font-size: 3rem;
`;

export const FinishedBox = styled.div`
  height: 100%;
  ${mixin.center}
  flex-direction: column;
  font-size: 3rem;
`;
