import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledStepProgressBar = styled.div`
  height: 21%;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity ${(props) => (props.show ? "0.7s" : "0.55s")} ease-in-out;
  transition-delay: ${(props) => (props.show ? "0.5s" : "0s")};
  @media screen and (max-width: 500px) {
    padding: 3rem 0.5rem;
  }
`;
export const StepWrapper = styled.div`
  position: relative;
  ${mixin.center}
  flex-direction: column;
  width: 25%;
  z-index: ${(props) => props.index};
`;

export const StepNumber = styled.div`
  position: relative;
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
  z-index: 1;

  &.completed {
    background-color: ${color.primary};
    border-color: ${color.primary};
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
  width: 100%;
  padding: 0 1rem;
  font-weight: 500;
  line-height: 1.25;
  text-transform: uppercase;
  text-align: center;
  margin-top: 1rem;
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
  position: absolute;
  height: 0.2rem;
  background-color: ${color.primaryLightest};
  width: calc(100% - 4rem);
  top: 2rem;
  left: calc(50% + 2rem);

  &.active {
    background-color: ${color.primary};
  }
`;
