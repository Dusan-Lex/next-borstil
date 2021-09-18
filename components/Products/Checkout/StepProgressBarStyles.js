import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledStepProgressBar = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity 0.9s ease-in-out 0.4s;
`;
export const StepWrapper = styled.div`
  position: relative;
  ${mixin.center}
  flex-direction: column;
  width: 31%;
`;

export const StepNumber = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 0.3rem;
  border: 0.2rem solid ${color.primaryLightest};
  border-radius: 50%;
  ${mixin.center};
  color: ${color.primaryLightest};
  font-size: 2.2rem;
  font-weight: 600;
  transition: transform 0.2s ease;
  margin-bottom: 1rem;

  &.completed {
    background-color: ${color.primary};
    border-color: ${color.secondary};
    color: ${color.secondary};
  }
  &.active {
    transform: scale(1.3);
    background-color: ${color.secondaryLight};
    border-color: ${color.primary};
    color: ${color.primaryLight};
  }
`;
export const StepDescription = styled.div`
  color: ${color.primaryLightest};
  padding: 0 1rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  transition: transform 0.2s ease;
  &.completed {
    color: ${color.primary};
  }
  &.active {
    color: ${mixin.darken(color.primary, 0.1)};
    transform: scale(1.25);
    text-decoration: underline;
  }
`;

export const HorizontalLine = styled.div`
  height: 0.2rem;
  background-color: ${color.primaryLightest};
  position: absolute;
  width: 70%;
  top: 2rem;
  left: 70%;

  &.active {
    background-color: ${color.primary};
  }
`;
