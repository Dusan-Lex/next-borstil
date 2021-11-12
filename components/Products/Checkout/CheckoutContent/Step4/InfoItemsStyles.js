import styled from "styled-components";
import { color } from "../../../../../shared/utils/styles";

export const StyledInfoItem = styled.div`
  background-color: ${color.primaryLightest};
  padding-left: 1rem;
  margin-top: 1rem;
  color: ${color.secondaryDark};
  span {
    font-size: 1.7rem;
    font-weight: 500;
    color: ${color.secondaryLight};
  }
`;
export const AboutCompany = styled.h3`
  text-transform: uppercase;
  color: #b16e17;
  padding-top: 1rem;
`;
