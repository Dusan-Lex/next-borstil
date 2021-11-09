import styled from "styled-components";
import { mixin } from "../../../../../shared/utils/styles";

export const StyledStep4 = styled.div`
  position: relative;
  height: 100%;
  ${mixin.scrollableY};
  padding: 3rem;

  @media only screen and (max-width: 450px) {
    padding: 3rem 1rem;
  }
`;
