import styled from "styled-components";
import { color, mixin } from "../../../../../shared/utils/styles";

export const StyledCheckbox = styled.div`
  cursor: pointer;
  padding: ${(props) => props.padding};
  &.active {
    background-color: ${(props) =>
      props.label2 ? mixin.lighten(color.primary, 0.5) : "white"};
  }
  @media only screen and (max-width: 450px) {
    margin: 1rem 0;
  }
`;

export const Label1 = styled.div`
  font-weight: 600;
  color: ${color.secondary};

  display: flex;
  align-items: center;
  span {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 2px;
    margin-right: 1rem;
    border: 1px solid ${color.secondary};
    &.active {
      background-color: ${mixin.lighten(color.primary, 0.1)};
    }
  }
`;
export const Label2 = styled.div`
  margin-top: 0.5rem;
  margin-left: 2.9rem;
  font-size: 1.5rem;
  color: ${color.secondaryDarkest};
  line-height: 1.4;
  display: none;
  &.active {
    display: block;
  }
`;
