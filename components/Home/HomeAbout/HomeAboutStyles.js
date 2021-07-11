import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledHomeAbout = styled.section`
  position: relative;
  width: 100vw;
  margin: 5rem 0;
`;
export const ImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  z-index: -1;
  background-image: linear-gradient(
      to top,
      ${mixin.rgba(color.primary, 0.1)} 0%,
      ${mixin.rgba(color.primary, 0.35)} 80%,
      ${mixin.rgba(color.primary, 0.65)} 100%
    ),
    url("/images/Home/Borstil-about.jpg");
  background-position: center right;
  background-size: cover;
`;

export const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    ${mixin.coverParent}
    z-index: 2;
    background: linear-gradient(
      to top,
      ${mixin.rgba(color.primary, 0.1)} 0%,
      ${mixin.rgba(color.primary, 0.35)} 80%,
      ${mixin.rgba(color.primary, 0.65)} 100%
    );
  }
`;
export const AboutImage = styled.img`
  object-fit: cover;
  object-position: center right;
  width: 100vw;
  height: 100%;
  transform: translateX(-80vw);
  animation: ${(props) => `moveLeft-${props.item}`} 2.2s ease-out forwards;
  animation-play-state: ${(props) => props.play};

  @media only screen and (max-width: 900px) {
    animation-duration: 1.5s;
  }

  @keyframes moveLeft-1 {
    100% {
      transform: translateX(0);
    }
  }
  @keyframes moveLeft-2 {
    100% {
      transform: translateX(-20vw);
    }
  }
  @keyframes moveLeft-3 {
    100% {
      transform: translateX(-40vw);
    }
  }
  @keyframes moveLeft-4 {
    100% {
      transform: translateX(-60vw);
    }
  }
`;

export const AboutContentBox = styled.div`
  max-width: 1200px;
  margin: auto;
  z-index: 100;
  margin-top: -15rem;
  background-color: ${(props) => props.theme.text.regularRev};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 10rem;

  @media only screen and (max-width: 1200px) {
    margin-top: 0;
    padding: 4rem;
  }

  p {
    color: ${(props) => props.theme.text.regular};
    font-size: 1.9rem;
    line-height: 1.8;
    font-weight: 400;
    padding: 1rem;

    span {
      font-size: 2.1rem;
      font-weight: 500;
      color: ${color.primary};
      text-transform: uppercase;
      text-decoration: underline;
    }
  }
`;
