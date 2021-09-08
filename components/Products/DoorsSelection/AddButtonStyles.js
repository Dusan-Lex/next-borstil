import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const AddDoorsForm = styled.form`
  text-align: center;
  .title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: ${color.primaryDark};
  }
  .group {
    font-size: 2rem;
    font-weight: 500;
    color: ${color.primaryDark};
  }
`;
const Button = styled.button`
  width: 5rem;
  padding: 0.5rem 1rem;
  color: ${color.secondaryLight};
  background-color: ${color.primaryLight};
  border: 2px solid ${color.primary};
  cursor: pointer;
`;

export const MinusButton = styled(Button)`
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
`;

export const PlusButton = styled(Button)`
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
`;

export const AddDoorsQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const AddDoorsInput = styled.input`
  padding: 0.5rem 1rem;
  width: 5rem;
  text-align: center;
  color: ${color.secondary};
  border: none;
  border-top: 2px solid ${color.primary};
  border-bottom: 2px solid ${color.primary};
`;

export const AddDoorsButton = styled.button`
  position: relative;
  font-weight: 600;
  padding: 1rem 2rem;
  margin-top: 2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.backgroundRev};
  background-color: ${(props) => props.theme.background};
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s;
  @media (hover: hover) and (pointer: fine) {
    &::after {
      content: "";
      ${mixin.coverParent}
      border-radius: 2px;
      border: 2px solid ${(props) => props.theme.background};
      transition: all 0.2s;
    }
    &:hover {
      background-color: ${(props) => props.theme.backgroundRev};
      color: ${(props) => props.theme.background};

      &::after {
        transform: scale(1.062, 1.3);
        border: 2px solid ${color.secondaryLight};
      }
    }
  }
`;
