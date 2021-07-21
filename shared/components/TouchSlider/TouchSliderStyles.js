import styled from "styled-components";
import { mixin, color } from "../../utils/styles";

export const TouchSliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
  padding-bottom: 10rem;
`;

export const TouchSlider = styled.div`
  display: inline-flex;
  transform: translateX(0);
  transition: transform 0.4s ease-out;
  cursor: grab;
  &.grabbing {
    cursor: grabbing;
  }
`;

export const TouchSliderArrow = styled.div`
  position: absolute;
  cursor: ${(props) => (props.allowed ? "pointer" : "not-allowed")};
  top: 33%;
  z-index: 10;
  ${(props) => (props.left ? "left: 0;" : "right: 0;")};
  @media only screen and (min-width: 1200px) {
    ${(props) => (props.left ? "left: 1rem;" : "right: 1rem;")}
  }
  @media only screen and (min-width: 600px) {
    ${(props) => (props.left ? "left: 0.5rem;" : "right: 0.5rem;")}
  }
  @media only screen and (max-width: 800px) {
    top: 38%;
  }
  @media only screen and (max-width: 500px) {
    top: 27vw;
  }
  svg {
    stroke: ${color.primaryLightest};
    margin-right: ${(props) => (props.left ? "0.3rem" : "-0.3rem")};
  }
  &.not-allowed {
    cursor: not-allowed;
    svg {
      stroke: gray;
    }
  }
`;

export const TouchSlide = styled.div`
  position: relative;
  width: 33.33333vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  user-select: none;

  @media only screen and (max-width: 1200px) {
    width: 50vw;
  }
  @media only screen and (max-width: 800px) {
    width: 100vw;
  }
`;
export const TouchSlideContent = styled.div`
  position: absolute;
  z-index: 1;
  top: 80%;
  width: 70%;
  height: 30%;
  background: ${mixin.rgba(color.secondary, 0.95)};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    ${mixin.coverParent};
    width: calc(100% - 3rem);
    height: calc(100% - 3rem);
    background-color: transparent;
    transform: translate(1.5rem, 1.5rem);
    z-index: 10;
    border: 2px solid ${color.primary};
  }
`;
export const TouchImageWrapper = styled.div`
  width: 95%;
`;
export const TouchSlideTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;

  color: ${color.primaryLightest};
`;
export const TouchSlideDescription = styled.p`
  color: ${color.primaryLightest};
`;
