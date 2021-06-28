import styled from "styled-components";
import { color, mixin } from "../../shared/utils/styles";

export const StyledHomeSlider = styled.section`
  height: 97vh;
  max-height: 1100px;
  position: relative;
  max-width: 1450px;
  margin: auto;
  /* animation: slider-a1 0.9s ease forwards; */
  /* background-color: ${color.primaryLightest}; */
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${mixin.center}
  overflow: hidden;
  position: relative;
`;

export const Slide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const Slider = styled.div`
  ${mixin.coverParent}
  display: flex;
  padding-left: 15rem;
  align-items: center;
  /* opacity: 0.5; */
  /* animation: slider-a4 0.5s forwards; */
  @media screen and (max-width: 800px) {
    padding-left: 7rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 600px) {
    padding-left: 3rem;
    padding-right: 2rem;
  }
  &::before {
    content: "";
    ${mixin.coverParent}
    z-index: 2;
    overflow: hidden;
    background: linear-gradient(
      to bottom,
      ${mixin.rgba(color.primaryLightest, 0.65)} 0%,
      ${mixin.rgba(color.primaryLightest, 0.65)} 94%,
      ${(props) => mixin.rgba(props.theme.backgroundRev, 1)} 94%,
      ${(props) => mixin.rgba(props.theme.backgroundRev, 1)} 100%
    );
  }
`;

export const SliderArrow = styled.div`
  position: absolute;
  width: 7rem;
  height: 5rem;
  cursor: pointer;
  ${mixin.center}
  border: 2px solid ${color.primary};
  background-color: ${color.primaryLightest};
  transition: transform 0.3s ease-out;
  top: 50%;
  z-index: 10;
  ${(props) => (props.left ? "left: -3.5rem;" : "right: -3.5rem;")}

  @media screen and (max-width: 1550px) {
    ${(props) => (props.left ? "left: 3.5rem;" : "right: 3.5rem;")}
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: -0.12rem;
    top: -0.12rem;
    bottom: -0.12rem;
    right: -0.12rem;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: ${(props) => (props.left ? "right" : "left")};
  }

  &::before {
    background-color: ${color.secondary};
    transition: transform 0.3s ease;
  }

  &::after {
    background-color: ${color.primary};
    transition: transform 0.3s 0.16s ease;
  }

  &:hover {
    /* border-color: ${color.primary}; */
    span {
      color: ${color.primaryLightest};
    }
    &::before,
    &::after {
      transform: scaleX(1);
    }
  }

  &:active {
    transform: scale(1.1);
    border-color: ${color.secondary};

    span {
      color: ${color.primary};
    }

    &::after {
      background-color: ${color.secondary};
    }
  }

  span {
    width: 80%;
    height: 80%;
    font-size: 3rem;
    ${mixin.center}
    color: ${color.secondary};
    transition: color 0.15s 0.15s ease;
    transform: ${(props) => (props.left ? "rotateZ(180deg)" : "")};
  }

  /* @media screen and (max-width: 1200px) {
    display: none;
  } */
`;
