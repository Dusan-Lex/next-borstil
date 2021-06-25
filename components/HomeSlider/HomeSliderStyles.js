import styled from "styled-components";
import { color, mixin } from "../../shared/utils/styles";

export const StyledHomeSlider = styled.section`
  height: 97vh;
  max-height: 1100px;
  position: relative;
  max-width: 1450px;
  margin: auto;
  animation: slider-a1 0.9s ease forwards;
  background-color: ${color.primaryLightest};
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 15rem;
  align-items: center;
  opacity: 0.5;
  animation: slider-a4 0.5s forwards;
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
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background: linear-gradient(
      to bottom,
      rgba($color-primary-light-2, 0.65) 0%,
      rgba($color-primary-light-2, 0.65) 94%,
      rgba($color-primary-light-1, 1) 94%,
      rgba($color-primary-light-1, 1) 100%
    );
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
