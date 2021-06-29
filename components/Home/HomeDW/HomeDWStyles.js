import styled from "styled-components";
import { color, mixin } from "../../../shared/utils/styles";

export const StyledHomeDw = styled.section`
  max-width: 1200px;
  height: auto;
  background-color: ${(props) => props.theme.backgroundRev};
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 6rem 3rem 4rem;
  position: relative;
  margin-top: -6.1rem;

  @media only screen and (max-width: 1200px) {
    background-color: white;
    padding-top: 3rem;
  }
`;

export const HomeDwContainer = styled.div`
  height: 75%;
  min-height: 45rem;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 1rem;
  background-color: ${color.secondary};
  ${mixin.center}
  flex-direction: row;
  overflow: hidden;
  transform: translateY(75%);
  opacity: 0;
  animation: 1s ease-out forwards
    ${(props) => (props.inView ? "running" : "paused")} sectionDwA2;

  @keyframes sectionDwA2 {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 4rem 2rem;
    flex-direction: column;
    margin-top: 2rem;
    animation: none;
    opacity: 1;
    transform: translateY(0);
  }
  @media only screen and (max-width: 600px) {
    margin-top: 4rem;
  }

  .svg-box {
    width: 28%;
    ${mixin.center}
    opacity: 0;
    transform: translateX(-150%);
    animation: 1s 0.5s ease forwards
      ${(props) => (props.inView ? "running" : "paused")} sectionDwA3;

    @keyframes sectionDwA3 {
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @media only screen and (max-width: 800px) {
      width: 100%;
      margin-bottom: 2.5rem;
      animation: none;
      opacity: 1;
      transform: translateX(0);
    }
    svg {
      g {
        fill: ${color.primaryLightest};
      }
    }
  }

  .details {
    padding: 2rem 2.5rem;
    width: 76%;
    color: ${color.primaryLightest};
    ${mixin.center}
    flex-direction: column;
    text-align: center;
    font-size: 2.3rem;
    position: relative;
    margin-right: 1rem;
    opacity: 0;
    transform: translateX(25%);
    animation: 0.8s 0.8s ease-out forwards
      ${(props) => (props.inView ? "running" : "paused")} sectionDwA3;

    @media only screen and (max-width: 800px) {
      font-size: 1.9rem;
      animation: none;
      opacity: 1;
      transform: translateX(0);
    }
    a {
      margin-top: 2.5rem;
    }

    @media only screen and (max-width: 800px) {
      width: 100%;
      margin-right: 0;
    }

    @media only screen and (min-width: 1800px) {
      font-size: 1.95rem;
    }

    &::before,
    &::after {
      content: "";
      ${mixin.coverParent}
      position: absolute;
      z-index: -1;
      transform: scale(0.2, 0.27);
    }

    &::before {
      border-top: 0.8rem solid ${color.primary};
      border-left: 0.8rem solid ${color.primary};
      transform-origin: 0% 0%;
    }
    &::after {
      border-bottom: 0.8rem solid ${color.primary};
      border-right: 0.8rem solid ${color.primary};
      transform-origin: 100% 100%;
    }
  }
`;
