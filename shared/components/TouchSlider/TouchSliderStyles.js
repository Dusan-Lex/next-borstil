import styled from "styled-components";
import { mixin, color } from "../../utils/styles";

export const TouchSliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
  padding-bottom: 8rem;
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
  cursor: pointer;
  top: 33%;
  z-index: 10;
  ${(props) => (props.left ? "left: 0;" : "right: 0;")}
  /* @media only screen and (max-width: 1200px) {
    top: 33%;
  } */
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
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text.regular};

  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TouchImageWrapper = styled.div`
  width: 95%;
`;
export const TouchSlideTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
`;
export const TouchSlideDescription = styled.p``;
