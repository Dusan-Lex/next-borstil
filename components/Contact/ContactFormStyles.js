import Color from "color";
import styled from "styled-components";
import { mixin, color } from "../../shared/utils/styles";

export const StyledContactForm = styled.div`
  padding: 3rem 0;
`;

export const FormSubtitle = styled.h3`
  font-size: 2.5rem;
  color: ${color.secondary};
  text-align: center;
`;
export const FormTitle = styled.h2`
  font-size: 5rem;
  color: ${color.primary};
  text-align: center;
  margin-bottom: 4.5rem;
  @media only screen and (max-width: 900px) {
    margin-bottom: 3.5rem;
  }
`;
export const Form = styled.form`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  @media only screen and (max-width: 430px) {
    display: block;
  }
`;
export const FormGroup = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  width: 100%;
  border: 1px solid ${color.secondaryLight};
  height: 5rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  color: ${color.secondary};
  ${mixin.placeholderColor(color.secondaryLight)}
  margin-bottom: 3rem;
`;

export const FormSpan = styled.span`
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
  color: red;
`;

export const FormSelect = styled.select`
  width: 100%;
  border: 1px solid ${color.secondaryLight};
  height: 5rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  color: ${mixin.rgba(color.secondaryLight, 0.8)};
  margin-bottom: 3rem;
`;

export const FormTextArea = styled.textarea`
  grid-column: 1/3;
  border: 1px solid ${color.secondaryLight};
  height: 20rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  color: ${color.secondary};
  ${mixin.placeholderColor(color.secondaryLight)}
  @media only screen and (max-width: 430px) {
    width: 100%;
  }
`;
export const FormButton = styled.button`
  font-weight: 500;
  grid-column: 1/3;
  border-radius: 5px;
  justify-self: center;
  width: 30rem;
  height: 5rem;
  padding: 1rem 2rem;
  margin: 2rem 0;
  font-size: 1.8rem;
  background-color: ${color.primary};
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border: 2px solid ${color.primary};
    background-color: white;
    color: ${color.primary};
  }
  @media only screen and (max-width: 430px) {
    margin-bottom: 3rem;
  }
`;

export const FormError = styled.div`
  font-size: 1.8rem;
  grid-column: 1/3;
  margin-bottom: 2rem;
  padding: 0.3rem;
  color: ${color.secondary};
  border: 2px solid
    ${(props) => (props.status === "error" ? color.primary : "green")};
  border-radius: 5px;
  @media only screen and (max-width: 430px) {
    width: 100%;
  }
`;
