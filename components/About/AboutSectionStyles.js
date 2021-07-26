import styled from "styled-components";
import { color, mixin } from "../../shared/utils/styles";

export const AboutFirm = styled.section`
  height: 100vh;
  min-height: 70rem;
  max-height: 100rem;
  background-color: ${mixin.lighten(color.secondary, 0.2)};
  ${mixin.center}
  padding-top: 10rem;
  @media only screen and (max-width: 1200px) {
    padding-top: calc(8.5vh + 2rem);
    min-height: 82rem;
  }
  @media only screen and (max-width: 800px) {
    min-height: 86rem;
  }
  @media only screen and (max-width: 450px) {
    min-height: 92rem;
  }
  @media only screen and (max-width: 300px) {
    min-height: 100rem;
  }
`;

export const Firm = styled.div`
  width: 100%;
  height: 75%;
  min-height: 60rem;
  max-width: 1600px;
  padding-left: 5rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  &.start {
    opacity: 1;
  }

  &.opacity-animation {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }
  &.overlay-animation {
    .first-description h3,
    .first-description h5,
    .first-description p,
    .about-img-box {
      ${mixin.overlayAnimation(
        color.secondary,
        mixin.lighten(color.secondary, 0.2)
      )}
    }
    .second-description {
      animation: fade-up 1s 0.7s backwards;
      div {
        animation: fade-up 0.5s 1.4s forwards;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    width: 76%;
    height: auto;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 0;
    width: 80%;
  }
`;
export const FirmDesc = styled.div`
  width: 48%;
  height: 80%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    margin: 2rem 0 3rem;
  }
`;
export const FirmDesc1 = styled.div`
  padding-right: 4rem;
  color: ${color.primaryLightest};
  height: 60%;

  h3 {
    position: relative;
    width: 15rem;
    font-size: 1.8rem;
    letter-spacing: 5px;
    color: ${color.primary};
  }
  h5 {
    position: relative;
    width: 30rem;
    margin-top: 0.5rem;
    font-size: 2.5rem;
    font-weight: 500;
  }
  p {
    position: relative;
    margin: 2rem 0;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    padding-right: 0;
  }
`;
export const FirmDesc2 = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.backgroundAbout};
  ${mixin.center}
  height: 40%;
  text-align: center;
  padding: 3.5rem;
  color: ${color.secondaryDark};
  overflow: hidden;
  @media only screen and (max-width: 1200px) {
    background-color: ${color.primaryLightest};
  }
  @keyframes fade-up {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 5rem;
    height: 5rem;
    ${mixin.center}
    background-color: ${(props) => props.theme.text.hover};
    cursor: pointer;
    transform: translateY(100%);
    transition: background-color 0.1s ease;
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        svg {
          stroke: ${(props) => props.theme.background};
        }
      }
    }

    @media only screen and (max-width: 1200px) {
      background-color: ${color.primary};
    }

    svg {
      stroke: ${(props) => props.theme.text.regular};
      transition: stroke 0.1s ease;
      @media only screen and (max-width: 1200px) {
        stroke: ${color.primaryLightest};
      }
    }
  }
`;

export const FirmImageBox = styled.div`
  position: relative;
  width: 48%;
  height: 80%;
  ${mixin.center}
  padding: 1px;
  @media only screen and (max-width: 1200px) {
    height: 30rem;
    width: 45rem;
  }
  @media only screen and (max-width: 600px) {
    height: 28rem;
    width: 42rem;
  }
  @media only screen and (max-width: 340px) {
    height: 24rem;
    width: 36rem;
  }
`;
export const FirmImage = styled.div`
  background-image: linear-gradient(
      to bottom,
      ${mixin.rgba(color.secondary, 0.3)} 0%,
      ${mixin.rgba(color.secondary, 0)} 20%,
      ${mixin.rgba(color.secondary, 0)} 80%,
      ${mixin.rgba(color.secondary, 0.4)} 100%
    ),
    url(${(props) => props.src});
  background-position: ${(props) => props.bgPos};
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const FirmSideImages = styled.div`
  width: 12%;
  height: 60%;
  min-height: 48rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    width: 16%;
    align-self: center;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const FirmSideImage = styled.div`
  &.select,
  &:hover {
    background-image: linear-gradient(
        to bottom,
        ${mixin.rgba(color.secondaryLight, 0.8)} 0%,
        ${mixin.rgba(color.secondaryDark, 0.8)} 100%
      ),
      url(${(props) => props.src});
  }
  background-image: url(${(props) => props.src});
  background-position: ${(props) => props.bgPos};
  background-size: cover;
  width: 10rem;
  height: 10rem;
  margin: 0.5rem;
  cursor: pointer;
  &:first-of-type {
    margin-top: 0;
  }
`;
