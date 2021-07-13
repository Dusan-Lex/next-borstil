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
  .horizontal,
  .vertical {
    position: absolute;
    background-color: ${mixin.darken(color.primary, 0.1)};
    transition: all 0.5s ease-in-out;
    transform: rotate(${(props) => (props.active ? "90" : "-90")}deg);
  }
  .horizontal {
    width: 70%;
    height: 0.5rem;
    opacity: ${(props) => (props.active ? "0" : "1")};
  }
  .vertical {
    width: 0.5rem;
    height: 70%;
  }
`;
