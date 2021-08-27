import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledDoorsSelection = styled.div`
  width: 30%;
  background-color: white;
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
    height: 40rem;
    width: 100%;
  }
`;

export const SelectionItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 25%;
  align-items: center;

  .title {
    font-size: 2rem;
    font-weight: 500;
    color: ${color.primaryDark};
  }

  .items {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const SelectionItem = styled.div`
  width: 25%;
  ${mixin.center}
  cursor: pointer;
  img {
    width: 3.5rem;
  }
`;
