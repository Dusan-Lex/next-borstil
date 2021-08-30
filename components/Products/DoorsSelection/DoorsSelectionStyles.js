import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledDoorsSelection = styled.div`
  width: 30%;
  background-color: white;
  padding-left: 1rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  transform: translateX(30%);
  opacity: 0;
  animation: doors-selections-in 0.7s 1s ease forwards;
  @keyframes doors-selections-in {
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 35%;
  }

  @media only screen and (max-width: 900px) {
    width: 80%;
    padding-left: 0;
    padding-top: 1rem;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SelectionItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  @media only screen and (max-width: 900px) {
    /* padding: 1rem; */
  }

  &:first-child {
    height: 35%;
  }
  &:nth-child(2) {
    height: 25%;
  }

  .title {
    font-size: 2rem;
    font-weight: 500;
    color: ${color.primaryDark};
    margin-bottom: 0.5rem;
  }

  .items {
    justify-self: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const SelectionItem = styled.div`
  ${mixin.center}
  cursor: pointer;

  &.-active {
    transform: scale(1.1);
    transition: transform 0.25s cubic-bezier(0.32, 2.56, 0.64, 2.56);
    &.color {
      transform: scale(1.05);
      transition-duration: 0.2s;
      border: 1px solid ${color.secondaryLight};
      border-radius: 3px;
    }
    &.handle-lock {
      transform: none;
      transition: all 0.1s;
      background-color: ${color.primaryLight};
      color: ${color.secondaryLight};
      border: 1px solid ${color.secondaryLight};
    }
  }

  &.color {
    padding: 0.5rem;
    border: 1px solid transparent;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 3px;
    }
  }
  &.handle-lock {
    font-weight: 500;
    text-transform: uppercase;
    padding: 1rem;
    color: ${color.primaryDark};
    border: 1px solid ${color.primaryDark};
    border-radius: 3px;
  }

  img {
    width: 3.8rem;
  }
`;
