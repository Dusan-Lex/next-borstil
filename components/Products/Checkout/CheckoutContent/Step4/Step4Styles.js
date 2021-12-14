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
  text-align: center;
  h4 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
    color: ${color.primaryDark};
  }
  h6 {
    display: flex;
    align-items: center;
    span {
      text-decoration: underline;
    }
    svg {
      height: 4rem;
      width: 4rem;
      margin-left: 0.5rem;
      fill: ${color.secondaryLight};
    }
  }
`;
