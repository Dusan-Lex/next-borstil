import styled from "styled-components";
import { color, mixin } from "../../../utils/styles";

export const Plus = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: transparent;
  ${mixin.center};
  cursor: pointer;

  span {
    position: absolute;
    width: 70%;
    height: 0.25rem;
    border-radius: 2px;
    background-color: ${color.primary};
    &:first-child {
      transform: rotate(90deg);
    }
  }
`;
