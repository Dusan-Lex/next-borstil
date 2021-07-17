import styled from "styled-components";
import Image from "next/image";
import { mixin } from "../../utils/styles";

export const TouchSliderContainer = styled.div`
  display: inline-flex;
  margin-top: 2rem;
  transform: translateX(0);
  transition: transform 0.45s ease-out;
  cursor: grab;
  &.grabbing {
    cursor: grabbing;
  }
`;
export const TouchSlide = styled.div`
  position: relative;
  width: 33.33333vw;
  display: flex;
  touch-action: none;
  align-items: flex-end;
  justify-content: center;
  user-select: none;
  @media only screen and (max-width: 1200px) {
    width: 50vw;
  }
  @media only screen and (max-width: 800px) {
    width: 100vw;
  }
  img {
    width: 90%;
    /* max-height: 92%; */
  }
`;
export const TouchSlideTitle = styled.h3``;
export const TouchSlideDescription = styled.p``;
export const TouchSlideContent = styled.div`
  position: absolute;
  top: 80%;
  width: 70%;
  height: 30%;
  background-color: ${(props) => mixin.rgba(props.theme.background, 0.99)};
  color: ${(props) => props.theme.text.regular};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
