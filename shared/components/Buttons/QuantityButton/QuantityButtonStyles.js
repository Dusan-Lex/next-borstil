import styled from "styled-components";
import { color } from "../../../utils/styles";

const Button = styled.button`
  width: 5rem;
  padding: 0.5rem 1rem;
  color: ${color.secondaryLight};
  background-color: ${color.primaryLight};
  border: 0.13rem solid ${color.primaryDark};
  cursor: pointer;
`;

export const MinusQuantityButton = styled(Button)`
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
`;

export const PlusQuantityButton = styled(Button)`
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
`;

export const StyledQuantityButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const QuantityInput = styled.input`
  padding: 0.5rem 1rem;
  width: 5rem;
  text-align: center;
  color: ${color.secondary};
  border: none;
  border-top: 0.13rem solid ${color.primaryDark};
  border-bottom: 0.13rem solid ${color.primaryDark};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
