import styled, { keyframes } from "styled-components";
import { mixin, color } from "../../../shared/utils/styles";

const titleAnimation = keyframes`
from{
  opacity:0;
  transform: translateX(25rem);
}
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const textAnimation = keyframes`
from{
  transform: translateY(25rem);
}
  to {
    transform: translateY(0);
  }
`;

export const StyledPopup = styled.div`
  position: absolute;
  right: 0;
  width: 20%;
  min-width: 22rem;
  height: 20vh;
  min-height: 17rem;
  padding: 1rem 0.5rem;
  border-bottom-left-radius: 0.6rem;
  background-color: ${(props) => props.theme.backgroundRev};
  ${mixin.boxShadowPopup}
  transform: translateX(+102%);
  transition: transform 0.9s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  top: 100%;

  &.animate {
    transform: translateX(0);
  }

  @media only screen and (max-width: 1200px) {
    position: absolute;
    width: 100%;
    height: 20rem;
    transform: translate(0);
    opacity: 0;
    transition: opacity 0.8s;
    border-radius: 0.6rem;
    min-height: 0;
    background-color: ${color.primary};
    &.animate {
      opacity: 1;
    }

    @media screen and (max-height: 900px) {
      height: 19rem;
    }
    @media screen and (max-height: 600px) {
      height: 16rem;
    }
    @media screen and (max-height: 500px) {
      height: 13rem;
    }
  }
`;

export const Title = styled.h5`
  color: ${(props) => props.theme.background};
  font-size: 2.4rem;
  animation: ${titleAnimation} 1s backwards;
  text-align: center;
  @media screen and (max-width: 1200px) {
    color: ${color.secondary};
    font-size: 3rem;
    @media screen and (max-height: 600px) {
      font-size: 2.5rem;
    }
    @media screen and (max-height: 500px) {
      font-size: 2.1rem;
    }
  }
`;

export const Text = styled.p`
  color: ${color.primaryLightest};
  text-align: center;
  animation: ${textAnimation} 1s ${(props) => (props.text2 ? "0.25s" : "0.1s")}
    backwards;

  @media screen and (max-width: 1200px) {
    font-size: 2.5rem;
    @media screen and (max-height: 600px) {
      font-size: 2rem;
    }
    @media screen and (max-height: 500px) {
      font-size: 1.7rem;
    }
  }

  a {
    transition: all 0.3s;

    &:hover {
      text-decoration: underline;
    }

    span {
      display: flex;
      align-items: center;

      svg {
        margin-right: 1rem;
        height: 2.5rem;
        width: 2.5rem;
        @media screen and (max-width: 1200px) {
          height: 3.5rem;
          width: 3.5rem;
        }
        @media screen and (max-height: 600px) {
          height: 3rem;
          width: 3rem;
        }
        @media screen and (max-height: 500px) {
          height: 2.5rem;
          width: 2.5rem;
        }
      }
    }
  }
`;
