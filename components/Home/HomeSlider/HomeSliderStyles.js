import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledHomeSlider = styled.section`
  height: 97vh;
  max-height: 1100px;
  position: relative;
  max-width: 1450px;
  margin: auto;
  background-color: ${color.primaryLightest};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${mixin.center}
  overflow: hidden;
  position: relative;
`;

export const Slider = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const Slide = styled.div`
  ${mixin.coverParent}
  display: flex;
  padding-left: 15rem;
  align-items: center;
  opacity: 0.5;
  animation: sliderA4 0.5s ${(props) => (props.first ? "2.6s" : "")} forwards;

  img {
    ${mixin.coverParent}
    object-fit: cover;
  }

  @keyframes sliderA4 {
    100% {
      opacity: 1;
    }
  }

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
    @media screen and (max-width: 1200px) {
      background: linear-gradient(
        to bottom,
        ${mixin.rgba(color.primaryLightest, 0.65)} 0%,
        ${mixin.rgba(color.primaryLightest, 0.65)} 94%,
        ${mixin.rgba(color.primary, 1)} 94%,
        ${mixin.rgba(color.primary, 1)} 100%
      );
    }
  }
`;

export const SlideContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin-top: auto;
  margin-bottom: 12vh;
  padding-left: 2rem;
  text-transform: uppercase;
  @media screen and (max-width: 1200px) {
    max-width: 80%;
  }
  @media screen and (max-width: 900px) {
    max-width: 90%;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 20rem;
  }

  &::before {
    content: "";
    ${mixin.coverParent}
    border-left: 3px solid ${color.primaryDark};
    z-index: -1;
    transform: scaleY(0);
    animation: sliderA2 0.8s ${(props) => (props.first ? "3.1s" : "0.5s")}
      ease-out forwards;
  }
  @keyframes sliderA2 {
    100% {
      transform: scaleY(1);
    }
  }
  h1 {
    font-size: 4.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.text.slider};
    transform: translateX(10rem);
    opacity: 0;
    animation: sliderA3 0.8s ${(props) => (props.first ? "2.8s" : "0.2s")}
      ease-out forwards;
    @keyframes sliderA3 {
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @media screen and (min-width: 1800px) {
      font-size: 4rem;
    }
    @media screen and (max-width: 1200px) {
      color: ${color.secondary};
    }
    @media screen and (max-width: 900px) {
      font-size: 5rem;
    }
    @media screen and (max-width: 599px) {
      font-size: 4rem;
    }
  }

  h3 {
    font-size: 2.4rem;

    color: ${(props) => props.theme.text.sliderRev};
    transform: translateY(3rem);
    opacity: 0.5;
    animation: sliderA5 0.8s ${(props) => (props.first ? "2.8s" : "0.2s")}
      ease-out forwards;
    @keyframes sliderA5 {
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @media screen and (max-width: 1400px) {
      font-size: 1.8rem;
    }
    @media screen and (max-width: 1200px) {
      font-size: 2.5rem;
      color: ${color.primaryDark};
    }
    @media screen and (max-width: 599px) {
      font-size: 2rem;
    }
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

  &:active {
    transform: scale(1.1);
    border-color: ${color.secondary};
    background-color: ${color.primary};
    span {
      color: ${color.primary};
    }
  }

  @media screen and (min-width: 1201px) {
    &:hover {
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

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
