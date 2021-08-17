import styled from "styled-components";
import { mixin, color } from "../../utils/styles";

export const TouchSliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
  padding-bottom: 8.5rem;
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
  @media only screen and (max-width: 700px) {
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
  @media only screen and (max-width: 700px) {
    width: 100vw;
  }
`;

export const TouchImageWrapper = styled.div`
  width: 95%;
  ${mixin.center}
`;

export const TouchSlideContent = styled.div`
  position: absolute;
  z-index: 1;
  top: 80%;
  width: 80%;
  height: 15rem;
  background: ${mixin.rgba(color.secondary, 0.98)};
  border-radius: 3px;
  padding: 1.5rem;
  ${mixin.center}
  flex-direction: column;
  @media only screen and (max-width: 500px) {
    padding: 1rem;
  }

  &::before {
    content: "";
    ${mixin.coverParent};
    width: calc(100% - 3rem);
    height: calc(100% - 3rem);
    background-color: transparent;
    transform: translate(1.5rem, 1.5rem);
    z-index: 10;
    border: 0.15rem solid ${color.primary};
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;
export const TouchSlideTitle = styled.p`
  font-size: 2.2rem;
  line-height: 1;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
  color: ${color.primary};
  z-index: 11;
`;
export const TouchSlideDescription = styled.div`
  text-align: left;
  z-index: 11;
  color: ${color.primaryLightest};
`;
