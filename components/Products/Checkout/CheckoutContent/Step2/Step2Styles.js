import styled from "styled-components";
import { color, mixin } from "../../../../../shared/utils/styles";

export const StyledStep2 = styled.div`
  position: relative;
  height: 100%;
  ${mixin.scrollableY}
`;

export const Step2Form = styled.form`
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  @media only screen and (max-width: 500px) {
    display: block;
  }
`;
export const Step2FormGroup = styled.div`
  @media only screen and (max-width: 500px) {
    margin-bottom: 5px;
  }
`;
export const Step2FormLabel = styled.label`
  font-size: 1.7rem;
  color: ${color.secondary};
  svg {
    width: 0.6rem;
    margin: 0.8rem 0.5rem;
  }
`;

export const Step2FormInput = styled.input`
  width: 100%;
  padding: 10px;
  background: ${mixin.lighten(color.primary, 0.64)};
  color: ${color.secondaryDark};
  border: 1px solid red;
`;
