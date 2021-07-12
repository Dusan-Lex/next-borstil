import styled from "styled-components";
import { color, mixin } from "../../../utils/styles";

export const XButton = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  border: 2px solid ${color.primaryLight};
  border-radius: 50%;
  background-color: ${color.secondaryDark};
  ${mixin.center};
  cursor: pointer;

  span {
    position: absolute;
    width: 70%;
    height: 0.4rem;
    border-radius: 2px;
    background-color: ${color.primaryLight};
    &:first-child {
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;
