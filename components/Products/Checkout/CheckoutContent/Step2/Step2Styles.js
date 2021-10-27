import styled from "styled-components";
import { color, mixin } from "../../../../../shared/utils/styles";

export const StyledStep2 = styled.div`
  position: relative;
  height: 100%;
  ${mixin.scrollableY}
`;

export const OrderTypeBox = styled.div`
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
export const OrderType = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  div {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 2px;
    margin-right: 0.7rem;
    border: 1px solid ${color.secondary};
    &.active {
      background-color: ${mixin.lighten(color.primary, 0.5)};
    }
  }
  @media only screen and (max-width: 450px) {
    margin: 1rem 0;
  }
`;
