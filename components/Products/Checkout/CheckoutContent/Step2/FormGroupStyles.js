import styled from "styled-components";
import { color, mixin } from "../../../../../shared/utils/styles";

export const StyledFormGroup = styled.div`
  margin-top: ${(props) => props.marginTop};
  &.postalcode {
    width: 15rem;
    display: inline-block;
    @media only screen and (max-width: 400px) {
      display: block;
      width: 100%;
    }
  }
  &.city {
    width: 50%;
    margin-left: 1rem;
    display: inline-block;
    @media only screen and (max-width: 500px) {
      width: calc(100% - 16rem);
    }
    @media only screen and (max-width: 400px) {
      display: block;
      margin-left: 0;
      width: 100%;
    }
  }
  @media only screen and (max-width: 500px) {
    margin-bottom: 5px;
  }
`;

export const FormLabel = styled.label`
  font-size: 1.7rem;
  color: ${color.secondary};
  svg {
    width: 0.6rem;
    margin: 0.8rem 0.5rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  background: ${mixin.lighten(color.primary, 0.64)};
  color: ${color.secondaryDark};
  border: 1px solid transparent;
  &.error {
    border: 1px solid red;
  }
`;
