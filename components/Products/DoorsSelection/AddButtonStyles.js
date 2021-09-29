import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const AddDoorsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: row;
    & > div {
      width: 50%;
    }
    button {
      margin: 0 auto;
      align-self: flex-end;
    }
  }

  .title {
    text-align: center;
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

export const AddDoorsButton = styled.button`
  width: 20rem;
  position: relative;
  font-weight: 600;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  margin-top: 2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.backgroundRev};
  background-color: ${(props) => props.theme.background};
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s;
  @media only screen and (max-width: 900px) {
    margin-top: 0;
  }
  @media only screen and (max-width: 600px) {
    color: ${color.primary};
    background-color: ${color.secondary};
  }

  &:active {
    background-color: ${(props) => props.theme.backgroundRev};
    color: ${(props) => props.theme.background};
    @media only screen and (max-width: 600px) {
      color: ${color.secondary};
      background-color: ${color.primary};
    }
  }

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
        border: 2px solid ${(props) => props.theme.background};
      }
    }

    &:active {
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.backgroundRev};
    }
  }
`;
