import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledDoorsSelection = styled.div`
  width: 30%;
  background-color: white;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  transform: translateX(30%);
  opacity: 0;
  animation: doors-selections-in 0.7s 0.1s ease forwards;
  @keyframes doors-selections-in {
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 35%;
  }
`;

export const SelectionItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

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
    margin-bottom: 1.5rem;
    @media only screen and (max-width: 1200px) {
      margin-bottom: 1.5rem;
    }
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
      transform: scale(1.3);
    }
    &.handle-lock {
      transform: none;
      background-color: ${color.primaryLight};
      color: ${color.secondaryDark};
    }
  }

  &.color {
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 3px;
    }
  }
  &.handle-lock {
    text-transform: uppercase;
    padding: 1rem;
    color: ${color.secondaryDark};
    /* background-color: ${color.primaryLightest}; */
    border: 1px solid ${color.secondaryLight};
    border-radius: 3px;
  }

  img {
    width: 38%;
  }
`;
