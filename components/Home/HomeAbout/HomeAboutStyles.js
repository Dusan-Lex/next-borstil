import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledHomeAbout = styled.section`
  position: relative;
  width: 100%;
  margin: 5rem 0;
  z-index: 10;
  .home-about-arrow {
    @media only screen and (max-width: 1200px) {
      padding: 0.75rem 5rem;
    }
  }
`;

export const Features = styled.div`
  position: absolute;
  top: 10rem;
  left: 10rem;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
    left: calc((100vw - 46rem) / 2);
    bottom: 5rem;
  }
  ul {
    width: 46rem;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 800px) {
      align-self: flex-end;
    }

    li {
      font-size: 2.3rem;
      font-weight: 500;
      margin: 1rem 0;
      text-transform: uppercase;
      padding: 1rem 3rem;
      color: ${(props) => props.theme.text.regular};
      background-color: ${(props) =>
        mixin.rgba(props.theme.text.regularRev, 0.82)};
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      & > div:first-child {
        margin-right: 2rem;
        span {
          color: ${mixin.darken(color.primary, 0.1)};
        }
      }
    }
  }
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
      ${mixin.rgba(color.primary, 0.3)} 80%,
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
      ${mixin.rgba(color.primary, 0.3)} 80%,
      ${mixin.rgba(color.primary, 0.65)} 100%
    );
  }
`;
export const AboutImage = styled.img`
  object-fit: cover;
  object-position: center right;
  width: 100vw;
  height: 100%;
  transform: translateX(-80%);
  animation: ${(props) => `moveLeft-${props.item}`} 2.5s ease-out forwards;
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
  background-color: ${color.secondary};
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
    color: ${color.primaryLightest};
    font-size: 1.9rem;
    line-height: 1.8;
    font-weight: 400;
    padding: 1rem;
    &:last-of-type {
      margin-bottom: 2rem;
    }

    span {
      font-size: 2.1rem;
      font-weight: 500;
      color: ${color.primary};
      text-transform: uppercase;
      text-decoration: underline;
    }
  }
`;

export const FeaturesDetails = styled.div`
  width: 40rem;
  height: 25rem;
  margin-left: 2rem;
  padding: 2rem;
  font-size: 2.4rem;
  background-color: ${(props) => mixin.rgba(props.theme.text.regularRev, 0.82)};
  /* color: ${(props) => props.theme.text.regular}; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  text-align: center;
  transform: translateX(${(props) => (props.active ? "0" : "100%")});
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  p {
    animation: pa1 0.5s ease-out forwards;
    opacity: 0;
    color: ${(props) => props.theme.text.regular};

    @keyframes pa1 {
      to {
        opacity: 1;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    margin-left: 0;
    width: 46rem;
    margin-bottom: 1rem;
    font-size: 2.6rem;
    font-weight: 500;
  }
`;
